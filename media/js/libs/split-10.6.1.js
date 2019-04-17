(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["splitio"] = factory();
	else
		root["splitio"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API = undefined;

var _LoggerFactory = __webpack_require__(92);

var _isAvailable = __webpack_require__(94);

var _isAvailable2 = _interopRequireDefault(_isAvailable);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLogLevelString = function isLogLevelString(str) {
  return !!(0, _lang.find)(_LoggerFactory.LogLevels, function (lvl) {
    return str === lvl;
  });
}; /**
   Copyright 2016 Split Software

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   **/

var defaultOptions = {
  showLevel: true,
  forceDisplayErrors: false
};

var LS_KEY = 'splitio_debug';
var ENV_VAR_KEY = 'SPLITIO_DEBUG';
var isNode = false;

// We check for version truthiness since most shims will have that as empty string.
if (typeof process !== 'undefined' && typeof process.version !== 'undefined' && !!process.version) {
  isNode = true;
}

var initialState = String(isNode ? process.env[ENV_VAR_KEY] : (0, _isAvailable2.default)() ? localStorage.getItem(LS_KEY) : '');

var createLog = function createLog(namespace) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new _LoggerFactory.Logger(namespace, (0, _lang.merge)(options, defaultOptions));
};

var ownLog = createLog('splitio-utils:logger');

/**
 * The public Logger utility API.
 */
var API = exports.API = {
  /**
   * Enables all the logs.
   */
  enable: function enable() {
    (0, _LoggerFactory.setLogLevel)(_LoggerFactory.LogLevels.DEBUG);
  },

  /**
   * Sets a custom log Level for the SDK.
   * @param {string} logLevel - Custom LogLevel value.
   */
  setLogLevel: function setLogLevel(logLevel) {
    if (isLogLevelString(logLevel)) {
      (0, _LoggerFactory.setLogLevel)(logLevel);
    } else {
      ownLog.error('Invalid Log Level - No changes to the logs will be applied.');
    }
  },

  /**
   * Disables all the log levels.
   */
  disable: function disable() {
    // Disabling is equal logLevel none
    (0, _LoggerFactory.setLogLevel)(_LoggerFactory.LogLevels.NONE);
  },

  /**
   * Exposed for usage with setLogLevel
   */
  LogLevel: _LoggerFactory.LogLevels
};

// "enable", "enabled" and "on", are synonims with 'DEBUG' loglevel
if (/^(enabled?|on)/i.test(initialState)) {
  API.enable(_LoggerFactory.LogLevels.DEBUG);
} else if (isLogLevelString(initialState)) {
  API.setLogLevel(initialState);
} else {
  // By default it starts disabled.
  API.disable();
}

// By default we expose logger instance creator wrapper.
exports.default = createLog;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = __webpack_require__(138);

var _filter2 = _interopRequireDefault(_filter);

var _typeof2 = __webpack_require__(44);

var _typeof3 = _interopRequireDefault(_typeof2);

var _isFinite = __webpack_require__(153);

var _isFinite2 = _interopRequireDefault(_isFinite);

var _keys = __webpack_require__(36);

var _keys2 = _interopRequireDefault(_keys);

exports.startsWith = startsWith;
exports.endsWith = endsWith;
exports.get = get;
exports.findIndex = findIndex;
exports.find = find;
exports.isString = isString;
exports.isFinite = isFinite;
exports.uniqueId = uniqueId;
exports.isObject = isObject;
exports.merge = merge;
exports.uniq = uniq;
exports.toString = toString;
exports.toNumber = toNumber;
exports.forOwn = forOwn;
exports.groupBy = groupBy;
exports.getFnName = getFnName;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the target string starts with the sub string.
 */
function startsWith(target, sub) {
  if (!(isString(target) && isString(sub))) {
    return false;
  }
  return target.slice(0, sub.length) === sub;
}

/**
 * Checks if the target string ends with the sub string.
 */
function endsWith(target, sub) {
  if (!(isString(target) && isString(sub))) {
    return false;
  }
  return target.slice(target.length - sub.length) === sub;
}

/**
 * Safely retrieve the specified prop from obj. If we can't retrieve
 * that property value, we return the default value.
 */
function get(obj, prop, val) {
  var res = val;

  try {
    // No risks nor lots of checks.
    var pathPieces = prop.split('.');
    var partial = obj;
    pathPieces.forEach(function (pathPiece) {
      return partial = partial[pathPiece];
    });

    if (typeof partial !== 'undefined') res = partial;
  } catch (e) {
    // noop
  }
  return res;
}

/**
 * Evaluates iteratee for each element of the source array. Returns the index of the first element
 * for which iteratee returns truthy. If no element is found or there's an issue with the params it returns -1.
 */
function findIndex(source, iteratee) {
  if (Array.isArray(source) && typeof iteratee === 'function') {
    for (var i = 0; i < source.length; i++) {
      if (iteratee(source[i], i, source) === true) {
        return i;
      }
    }
  }

  return -1;
}

/**
 * Loops through a source collection (an object or an array) running iteratee
 * against each element. It returns the first element for which iteratee returned
 * a truthy value and stops the loop.
 * Iteratee receives three arguments (element, key/index, collection)
 */
function find(source, iteratee) {
  var res = void 0;

  if (isObject(source)) {
    var keys = (0, _keys2.default)(source);
    for (var i = 0; i < keys.length && !res; i++) {
      var key = keys[i];
      var iterateeResult = iteratee(source[key], key, source);

      if (iterateeResult) res = source[key];
    }
  } else if (Array.isArray(source)) {
    for (var _i = 0; _i < source.length && !res; _i++) {
      var _iterateeResult = iteratee(source[_i], _i, source);

      if (_iterateeResult) res = source[_i];
    }
  }

  return res;
}

/**
 * Checks if a given value is a string.
 */
function isString(val) {
  return typeof val === 'string' || val instanceof String;
}

/**
 * Checks if a given value is a finite number.
 */
function isFinite(val) {
  if (typeof val === 'number') return (0, _isFinite2.default)(val);
  if (val instanceof Number) return (0, _isFinite2.default)(val.valueOf());

  return false;
}

var uniqueIdCounter = -1;

/**
 * Returns a number to be used as ID, which will be unique.
 */
function uniqueId() {
  return uniqueIdCounter++;
}

/**
 * Validates if a value is an object.
 */
function isObject(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' && obj.constructor === Object;
}

/**
 * There are some assumptions here. It's for internal use and we don't need verbose errors
 * or to ensure the data types or whatever. Parameters should always be correct (at least have a target and a source, of type object).
 */
function merge(target, source) {
  var res = target;

  isObject(source) && (0, _keys2.default)(source).forEach(function (key) {
    var val = source[key];

    if (isObject(val)) {
      if (res[key] && isObject(res[key])) {
        // If both are objects, merge into a new one.
        val = merge({}, res[key], val);
      } else {
        // else make a copy.
        val = merge({}, val);
      }
    }
    // We skip undefined values.
    if (val !== undefined) res[key] = val;
  });

  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  if (rest && rest.length) {
    var nextSource = rest.splice(0, 1)[0];
    res = merge.apply(undefined, [res, nextSource].concat(rest));
  }

  return res;
}

/**
 * Removes duplicate items on an array of strings.
 */
function uniq(arr) {
  var seen = {};
  return (0, _filter2.default)(arr, function (item) {
    return seen.hasOwnProperty(item) ? false : seen[item] = true;
  });
}

/**
 * Transforms a value into it's string representation.
 */
function toString(val) {
  if (val == null) return '';
  if (typeof val === 'string') return val;
  if (Array.isArray(val)) return val.map(function (val) {
    return isString(val) ? val : '';
  }) + '';

  var result = val + '';
  return result === '0' && 1 / val === Number.NEGATIVE_INFINITY ? '-0' : result;
}

/**
 * Transforms a value into a number.
 * Note: We're not expecting anything fancy here. If we are at some point, add more type checks.
 */
function toNumber(val) {
  if (typeof val === 'number') return val;

  if (isObject(val) && typeof val.valueOf === 'function') {
    var valOf = val.valueOf();
    val = isObject(valOf) ? valOf + '' : valOf;
  }

  if (typeof val !== 'string') {
    return val === 0 ? val : +val;
  }

  // Remove trailing whitespaces.
  val = val.replace(/^\s+|\s+$/g, '');

  return +val;
}

/**
 * Executes iteratee for given obj own props.
 */
function forOwn(obj, iteratee) {
  var keys = (0, _keys2.default)(obj);

  keys.forEach(function (key) {
    return iteratee(obj[key], key, obj);
  });

  return obj;
}

/**
 * Parses an array into a map of different arrays, grouping by the specified prop value.
 */
function groupBy(source, prop) {
  var map = {};

  if (Array.isArray(source) && isString(prop)) {
    for (var i = 0; i < source.length; i++) {
      var key = source[i][prop];

      // Skip the element if the key is not a string.
      if (isString(key)) {
        if (!map[key]) map[key] = [];

        map[key].push(source[i]);
      }
    }
  }

  return map;
}

/**
 * Returns the name of a given function.
 */
function getFnName(fn) {
  if (fn.name) return fn.name;

  return (fn.toString().match(/function (.+?)\(/) || ['', ''])[1];
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(2);
var ctx = __webpack_require__(18);
var hide = __webpack_require__(19);
var has = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(60)('wks');
var uid = __webpack_require__(42);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (o) {
  return o !== undefined && o !== null && typeof o.then === 'function';
};

module.exports = exports.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(93);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(223), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// SDK Modes
var LOCALHOST_MODE = exports.LOCALHOST_MODE = 'localhost';
var STANDALONE_MODE = exports.STANDALONE_MODE = 'standalone';
var PRODUCER_MODE = exports.PRODUCER_MODE = 'producer';
var CONSUMER_MODE = exports.CONSUMER_MODE = 'consumer';
// Storage types
var STORAGE_MEMORY = exports.STORAGE_MEMORY = 'MEMORY';
var STORAGE_REDIS = exports.STORAGE_REDIS = 'REDIS';
var STORAGE_LOCALSTORAGE = exports.STORAGE_LOCALSTORAGE = 'LOCALSTORAGE';
// Special treatments
var CONTROL = exports.CONTROL = 'control';

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(118);
var isBuffer = __webpack_require__(288);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(82);
var toPrimitive = __webpack_require__(57);
var dP = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(32);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(33);
module.exports = __webpack_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(136)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
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


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(212);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _CALLBACKS; /**
                Copyright 2016 Split Software

                Licensed under the Apache License, Version 2.0 (the "License");
                you may not use this file except in compliance with the License.
                You may obtain a copy of the License at

                    http://www.apache.org/licenses/LICENSE-2.0

                Unless required by applicable law or agreed to in writing, software
                distributed under the License is distributed on an "AS IS" BASIS,
                WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                See the License for the specific language governing permissions and
                limitations under the License.
                **/

var _lang = __webpack_require__(1);

var _LoggerFactory = __webpack_require__(92);

var _timer = __webpack_require__(213);

var _timer2 = _interopRequireDefault(_timer);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// logger to be used on this module
var logger = new _LoggerFactory.Logger('[TIME TRACKER]', {
  showLevel: false
});

// Map we will use for storing timers data
var timers = {};
// Tasks constants
var CONSTANTS = {
  SDK_READY: 'Getting ready - Split SDK',
  SDK_GET_TREATMENT: 'SDK - Get Treatment',
  SDK_GET_TREATMENTS: 'SDK - Get Treatments',
  SPLITS_READY: 'Getting ready - Splits',
  SEGMENTS_READY: 'Getting ready - Segments',
  METRICS_PUSH: 'Pushing - Metrics',
  IMPRESSIONS_PUSH: 'Pushing - Impressions',
  EVENTS_PUSH: 'Pushing - Events',
  MY_SEGMENTS_FETCH: 'Fetching - My Segments',
  SEGMENTS_FETCH: 'Fetching - Segments',
  SPLITS_FETCH: 'Fetching - Splits'
};
// Tasks callbacks, if any
var CALLBACKS = (_CALLBACKS = {}, (0, _defineProperty3.default)(_CALLBACKS, CONSTANTS.SDK_READY, {
  collector: 'SDK',
  method: 'ready'
}), (0, _defineProperty3.default)(_CALLBACKS, CONSTANTS.SDK_GET_TREATMENT, {
  collector: 'SDK',
  method: 'latency'
}), (0, _defineProperty3.default)(_CALLBACKS, CONSTANTS.SDK_GET_TREATMENTS, {
  collector: 'SDK',
  method: 'latency'
}), (0, _defineProperty3.default)(_CALLBACKS, CONSTANTS.MY_SEGMENTS_FETCH, {
  collector: 'mySegments',
  method: 'latency'
}), (0, _defineProperty3.default)(_CALLBACKS, CONSTANTS.SEGMENTS_FETCH, {
  collector: 'segmentChanges',
  method: 'latency'
}), (0, _defineProperty3.default)(_CALLBACKS, CONSTANTS.SPLITS_FETCH, {
  collector: 'splitChanges',
  method: 'latency'
}), _CALLBACKS);
/**
 * Generates the timer keys using the task name and a modifier, if any.
 * @param {string} task - The task name
 * @param {string} modifier - (optional) The modifier, if any.
 * @return {string} The generated timer key
 */
var generateTimerKey = function generateTimerKey(task, modifier) {
  return typeof modifier === 'string' ? task + modifier : task;
};
/**
 * Given the collectors map, it returns the specific collector for a given task.
 *
 * @param {string} task - The task name
 * @param {Object} collectors - The collectors map
 */
var getCollectorForTask = function getCollectorForTask(task, collectors) {
  var callbackData = CALLBACKS[task];

  if (callbackData && collectors) return collectors[callbackData.collector];

  return false;
};
/**
 * Given a collector and a task, returns the callback function that should be called when we stop the timer.
 *
 * @param {string} task - The task name
 * @param {Object} collector - The collector object for the task
 */
var getCallbackForTask = function getCallbackForTask(task, collector) {
  var callbackData = CALLBACKS[task];

  if (callbackData && collector) return collector[callbackData.method];

  return false;
};

var TrackerAPI = {
  /**
   * "Private" method, used to attach count/countException and stop callbacks to a promise.
   *
   * @param {Promise} promise - The promise we want to attach the callbacks.
   * @param {string} task - The name of the task.
   * @param {string} modifier - (optional) The modifier for the task, if any.
   */
  __attachToPromise: function __attachToPromise(promise, task, collector, modifier) {
    var _this = this;

    return promise.then(function (resp) {
      _this.stop(task, modifier);

      if (collector && collector.count) collector.count(resp.status);

      return resp;
    }).catch(function (err) {
      _this.stop(task, modifier);

      if (collector && collector.countException) collector.countException();

      throw err;
    });
  },

  /**
   * Starts tracking the time for a given task. All tasks tracked are considered "unique" because
   * there may be multiple SDK instances tracking a "generic" task, making any task non-generic.
   *
   * @param {string} task - The task we are starting.
   * @param {Object} collectors - The collectors map.
   * @param {Promise} promise - (optional) The promise we are tracking.
   * @return {Function | Promise} The stop function for this specific task or the promise received with the callbacks registered.
   */
  start: function start(task, collectors, promise) {
    var taskUniqueId = (0, _lang.uniqueId)();
    var taskCollector = getCollectorForTask(task, collectors);
    var result = void 0;

    // If we are registering a promise with this task, we should count the status and the exceptions as well
    // as stopping the task when the promise resolves. Then return the promise
    if ((0, _thenable2.default)(promise)) {
      result = this.__attachToPromise(promise, task, taskCollector, taskUniqueId);
    } else {
      // If not, we return the stop function, as it will be stopped manually.
      result = this.stop.bind(this, task, taskUniqueId);
      if (CALLBACKS[task] && !taskCollector) {
        // and provide a way for a defered setup of the collector, if needed.
        result.setCollectorForTask = this.setCollectorForTask.bind(this, task, taskUniqueId);
      }
    }

    // We start the timer, with an uniqueId attached to it's name, and save tracking info for this task.
    var trackingKey = generateTimerKey(task, taskUniqueId);
    var cb = getCallbackForTask(task, taskCollector);
    timers[trackingKey] = {
      cb: cb,
      timer: (0, _timer2.default)()
    };

    return result;
  },

  /**
   * Setup the collector for a task that reports metrics.
   *
   * @param {string} task - The task name
   * @param {string} taskUniqueId - The unique identifier for this task
   * @param {Object} collectors - The collectors map.
   */
  setCollectorForTask: function setCollectorForTask(task, taskUniqueId, collectors) {
    var taskCollector = getCollectorForTask(task, collectors);

    if (taskCollector) {
      var trackingKey = generateTimerKey(task, taskUniqueId);
      timers[trackingKey].cb = getCallbackForTask(task, taskCollector);
    }
  },

  /**
   * Stops the tracking of a given task.
   *
   * @param {string} task - The task we are starting.
   * @param {string} modifier - (optional) The modifier for that specific task.
   */
  stop: function stop(task, modifier) {
    var timerName = generateTimerKey(task, modifier);
    var timerData = timers[timerName];
    if (timerData) {
      // Stop the timer and round result for readability.
      var et = timerData.timer();
      logger.debug('[' + task + '] took ' + et + 'ms to finish.');

      // Check if we have a tracker callback.
      if (timerData.cb) {
        // If we have a callback, we call it with the elapsed time of the task and then delete the reference.
        timerData.cb(et);
      }

      // Remove the task tracking reference.
      delete timers[timerName];

      return et;
    }
  },

  /**
   * The constants shortcut for the task names.
   */
  TaskNames: CONSTANTS
};

// Our "time tracker" API
exports.default = TrackerAPI;
module.exports = exports.default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
var global = __webpack_require__(4);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(25);
var TO_STRING_TAG = __webpack_require__(5)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(53);
var defined = __webpack_require__(54);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(54);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(267), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(109);

var _extends3 = _interopRequireDefault(_extends2);

var _options = __webpack_require__(306);

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RequestFactory(settings, relativeUrl, params) {
  var token = settings.core.authorizationKey;
  var version = settings.version;
  var _settings$runtime = settings.runtime,
      ip = _settings$runtime.ip,
      hostname = _settings$runtime.hostname;

  var headers = {};
  var baseline = (0, _options2.default)();

  headers['Accept'] = 'application/json';
  headers['Content-Type'] = 'application/json';
  headers['Authorization'] = 'Bearer ' + token;
  headers['SplitSDKVersion'] = version;

  if (ip) headers['SplitSDKMachineIP'] = ip;
  if (hostname) headers['SplitSDKMachineName'] = hostname;

  return (0, _extends3.default)({
    headers: headers,
    url: settings.url(relativeUrl)
  }, baseline, params);
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/
exports.default = RequestFactory;
module.exports = exports.default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(84);
var enumBugKeys = __webpack_require__(61);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var call = __webpack_require__(98);
var isArrayIter = __webpack_require__(99);
var anObject = __webpack_require__(14);
var toLength = __webpack_require__(41);
var getIterFn = __webpack_require__(62);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Fetcher;

var _axios = __webpack_require__(286);

var _axios2 = _interopRequireDefault(_axios);

var _SplitNetworkError = __webpack_require__(80);

var _SplitNetworkError2 = _interopRequireDefault(_SplitNetworkError);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-services:service');

function Fetcher(request) {
  return (0, _axios2.default)(request).catch(function (error) {
    var resp = error.response;
    var config = error.config;
    var msg = '';

    if (resp) {
      // An HTTP error
      switch (resp.status) {
        case 404:
          msg = 'Invalid API key or resource not found.';
          break;
        default:
          msg = resp.statusText;
          break;
      }
    } else {
      // Something else, either an error making the request or a Network error.
      msg = error.message;
    }

    if (!resp || resp.status !== 403) // 403's log we'll be handled somewhere else.
      log.error('Response status is not OK. Status: ' + (resp ? resp.status : 'NO_STATUS') + '. URL: ' + config.url + '. Message: ' + msg);

    throw new _SplitNetworkError2.default(msg, resp ? resp.status : 'NO_STATUS');
  });
}
module.exports = exports.default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(14);
var dPs = __webpack_require__(133);
var enumBugKeys = __webpack_require__(61);
var IE_PROTO = __webpack_require__(59)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(56)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(85).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(58);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(144);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(146);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 46 */
/***/ (function(module, exports) {



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiKey = __webpack_require__(158);

Object.defineProperty(exports, 'validateApiKey', {
  enumerable: true,
  get: function get() {
    return _apiKey.validateApiKey;
  }
});

var _attributes = __webpack_require__(168);

Object.defineProperty(exports, 'validateAttributes', {
  enumerable: true,
  get: function get() {
    return _attributes.validateAttributes;
  }
});

var _event = __webpack_require__(169);

Object.defineProperty(exports, 'validateEvent', {
  enumerable: true,
  get: function get() {
    return _event.validateEvent;
  }
});

var _eventValue = __webpack_require__(170);

Object.defineProperty(exports, 'validateEventValue', {
  enumerable: true,
  get: function get() {
    return _eventValue.validateEventValue;
  }
});

var _key = __webpack_require__(171);

Object.defineProperty(exports, 'validateKey', {
  enumerable: true,
  get: function get() {
    return _key.validateKey;
  }
});

var _split = __webpack_require__(95);

Object.defineProperty(exports, 'validateSplit', {
  enumerable: true,
  get: function get() {
    return _split.validateSplit;
  }
});

var _splits = __webpack_require__(172);

Object.defineProperty(exports, 'validateSplits', {
  enumerable: true,
  get: function get() {
    return _splits.validateSplits;
  }
});

var _trafficType = __webpack_require__(173);

Object.defineProperty(exports, 'validateTrafficType', {
  enumerable: true,
  get: function get() {
    return _trafficType.validateTrafficType;
  }
});

var _isOperational = __webpack_require__(174);

Object.defineProperty(exports, 'validateIfOperational', {
  enumerable: true,
  get: function get() {
    return _isOperational.validateIfOperational;
  }
});

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(183);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(232);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SPLIT_KILLED: 'killed',
  NO_CONDITION_MATCH: 'default rule',
  SPLIT_NOT_FOUND: 'definition not found',
  EXCEPTION: 'exception',
  SPLIT_ARCHIVED: 'archived',
  NOT_IN_SPLIT: 'not in split'
};
module.exports = exports.default;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(83);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(25);
var $iterCreate = __webpack_require__(132);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(86);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
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
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(60)('keys');
var uid = __webpack_require__(42);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(31) ? 'pure' : 'global',
  copyright: 'Â© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(43);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(42)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(21);
var setDesc = __webpack_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(31);
var wksExt = __webpack_require__(63);
var defineProperty = __webpack_require__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(19);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(203), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(44);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(108);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(38);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(44);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bucketing = exports.matching = undefined;

var _lang = __webpack_require__(1);

/**
 * Verify type of key and return the set key property
 * If undefinedIfNotObj === true, it means that unless explicitly defined (using the Key object)
 * we will return undefined. (if it was a string, there's no bucketingKey)
 */
function KeyGetterFactory(keyProperty) {
  var undefinedIfNotObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return function getKeyProperty(key) {
    if ((0, _lang.isObject)(key)) {
      return key[keyProperty];
    }

    return undefinedIfNotObj ? undefined : key;
  };
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/
var matching = exports.matching = KeyGetterFactory('matchingKey');
var bucketing = exports.bucketing = KeyGetterFactory('bucketingKey', true);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(32);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

// @WARNING Symbol is not correctly working in PhantomJS
var types = exports.types = {
  ALL: 1,
  SEGMENT: 2,
  WHITELIST: 3,
  EQUAL_TO: 4,
  GREATER_THAN_OR_EQUAL_TO: 5,
  LESS_THAN_OR_EQUAL_TO: 6,
  BETWEEN: 7,
  UNDEFINED: 8,
  EQUAL_TO_SET: 9,
  CONTAINS_ANY_OF_SET: 10,
  CONTAINS_ALL_OF_SET: 11,
  PART_OF_SET: 12,
  ENDS_WITH: 13,
  STARTS_WITH: 14,
  CONTAINS_STRING: 15,
  IN_SPLIT_TREATMENT: 16,
  EQUAL_TO_BOOLEAN: 17,
  MATCHES_STRING: 18
};

var dataTypes = exports.dataTypes = {
  BOOLEAN: 'BOOLEAN',
  STRING: 'STRING',
  NUMBER: 'NUMBER',
  SET: 'SET',
  DATETIME: 'DATETIME',
  NOT_SPECIFIED: 'NOT_SPECIFIED'
};

var mapper = exports.mapper = function mapper(matcherType) {
  switch (matcherType) {
    case 'ALL_KEYS':
      return types.ALL;
    case 'IN_SEGMENT':
      return types.SEGMENT;
    case 'WHITELIST':
      return types.WHITELIST;
    case 'EQUAL_TO':
      return types.EQUAL_TO;
    case 'GREATER_THAN_OR_EQUAL_TO':
      return types.GREATER_THAN_OR_EQUAL_TO;
    case 'LESS_THAN_OR_EQUAL_TO':
      return types.LESS_THAN_OR_EQUAL_TO;
    case 'BETWEEN':
      return types.BETWEEN;
    case 'EQUAL_TO_SET':
      return types.EQUAL_TO_SET;
    case 'CONTAINS_ANY_OF_SET':
      return types.CONTAINS_ANY_OF_SET;
    case 'CONTAINS_ALL_OF_SET':
      return types.CONTAINS_ALL_OF_SET;
    case 'PART_OF_SET':
      return types.PART_OF_SET;
    case 'ENDS_WITH':
      return types.ENDS_WITH;
    case 'STARTS_WITH':
      return types.STARTS_WITH;
    case 'CONTAINS_STRING':
      return types.CONTAINS_STRING;
    case 'IN_SPLIT_TREATMENT':
      return types.IN_SPLIT_TREATMENT;
    case 'EQUAL_TO_BOOLEAN':
      return types.EQUAL_TO_BOOLEAN;
    case 'MATCHES_STRING':
      return types.MATCHES_STRING;
    default:
      return types.UNDEFINED;
  }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(243), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _repeat = __webpack_require__(78);

var _repeat2 = _interopRequireDefault(_repeat);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-producer:task'); /**
                                                          Copyright 2016 Split Software

                                                          Licensed under the Apache License, Version 2.0 (the "License");
                                                          you may not use this file except in compliance with the License.
                                                          You may obtain a copy of the License at

                                                              http://www.apache.org/licenses/LICENSE-2.0

                                                          Unless required by applicable law or agreed to in writing, software
                                                          distributed under the License is distributed on an "AS IS" BASIS,
                                                          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                          See the License for the specific language governing permissions and
                                                          limitations under the License.
                                                          **/

/**
 * Startable task factory.
 */
var TaskFactory = function TaskFactory(updater, period) {
  var updaterName = (0, _lang.getFnName)(updater);
  var stopUpdater = void 0;

  return {
    start: function start() {
      log.debug('Starting ' + updaterName + ' refreshing each ' + period);

      stopUpdater = (0, _repeat2.default)(function (reschedule) {
        log.debug('Running ' + updaterName);
        updater().then(function () {
          return reschedule();
        });
      }, period);
    },
    stop: function stop() {
      log.debug('Stopping ' + updaterName);

      stopUpdater && stopUpdater();
    }
  };
};

exports.default = TaskFactory;
module.exports = exports.default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function repeat(fn, delay) {
  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  var tid = void 0;
  var stopped = false;

  function next() {
    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    var _delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : delay;

    if (!stopped) {
      // IE 9 doesn't support function arguments through setTimeout call.
      // https://msdn.microsoft.com/en-us/library/ms536753(v=vs.85).aspx
      tid = setTimeout(function () {
        fn.apply(undefined, rest.concat([next]));
      }, _delay);
    }
  }

  function till() {
    clearTimeout(tid);
    tid = undefined;
    stopped = true;
  }

  till.reset = function () {
    clearTimeout(tid);
    tid = undefined;
    next.apply(undefined, [delay].concat(rest));
  };

  fn.apply(undefined, rest.concat([next]));

  return till;
}

exports.default = repeat;
module.exports = exports.default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(11);
var normalizeHeaderName = __webpack_require__(290);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(119);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(119);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setPrototypeOf = __webpack_require__(108);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(38);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(70);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(71);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(72);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }

  ExtendableBuiltin.prototype = (0, _create2.default)(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (_setPrototypeOf2.default) {
    (0, _setPrototypeOf2.default)(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var SplitNetworkError = function (_extendableBuiltin2) {
  (0, _inherits3.default)(SplitNetworkError, _extendableBuiltin2);

  function SplitNetworkError(msg, code) {
    (0, _classCallCheck3.default)(this, SplitNetworkError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SplitNetworkError.__proto__ || (0, _getPrototypeOf2.default)(SplitNetworkError)).call(this, msg));

    _this.statusCode = code;
    return _this;
  }

  return SplitNetworkError;
}(_extendableBuiltin(Error));

exports.default = SplitNetworkError;
module.exports = exports.default;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(56)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(26);
var arrayIndexOf = __webpack_require__(134)(false);
var IE_PROTO = __webpack_require__(59)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(27);
var IE_PROTO = __webpack_require__(59)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(18);
var IObject = __webpack_require__(53);
var toObject = __webpack_require__(27);
var toLength = __webpack_require__(41);
var asc = __webpack_require__(141);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(84);
var hiddenKeys = __webpack_require__(61).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(45);
var createDesc = __webpack_require__(33);
var toIObject = __webpack_require__(26);
var toPrimitive = __webpack_require__(57);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(82);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(2);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* eslint-disable no-console */


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = exports.setLogLevel = exports.LogLevels = undefined;

var _keys = __webpack_require__(36);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = __webpack_require__(164).format;

var isNode = typeof process !== 'undefined' && process.version ? true : false;

var LogLevels = exports.LogLevels = {
  'DEBUG': 'DEBUG',
  'INFO': 'INFO',
  'WARN': 'WARN',
  'ERROR': 'ERROR',
  'NONE': 'NONE'
};

// DEBUG is the default. The log level is not specific to an SDK instance.
var GlobalLogLevel = LogLevels.DEBUG;

var setLogLevel = exports.setLogLevel = function setLogLevel(level) {
  GlobalLogLevel = level;
};

var defaultOptions = {
  showLevel: true,
  displayAllErrors: false
};

var Logger = exports.Logger = function () {
  function Logger(category, options) {
    (0, _classCallCheck3.default)(this, Logger);

    this.category = category;
    this.options = (0, _assign2.default)({}, defaultOptions, options);
  }

  (0, _createClass3.default)(Logger, [{
    key: 'debug',
    value: function debug() {
      if (this._shouldLog(LogLevels.DEBUG)) this._log(LogLevels.DEBUG, format.apply(null, arguments));
    }
  }, {
    key: 'info',
    value: function info() {
      if (this._shouldLog(LogLevels.INFO)) this._log(LogLevels.INFO, format.apply(null, arguments));
    }
  }, {
    key: 'warn',
    value: function warn() {
      if (this._shouldLog(LogLevels.WARN)) this._log(LogLevels.WARN, format.apply(null, arguments));
    }
  }, {
    key: 'error',
    value: function error() {
      if (this.options.displayAllErrors || this._shouldLog(LogLevels.ERROR)) this._log(LogLevels.ERROR, format.apply(null, arguments));
    }
  }, {
    key: '_log',
    value: function _log(level, text) {
      var formattedText = this._generateLogMessage(level, text);
      var method = level === LogLevels.ERROR && !isNode ? 'error' : 'log';

      console[method](formattedText);
    }
  }, {
    key: '_generateLogMessage',
    value: function _generateLogMessage(level, text) {
      var textPre = ' => ';
      var result = '';

      if (this.options.showLevel) {
        result += '[' + level + ']' + (level === LogLevels.INFO || level === LogLevels.WARN ? ' ' : '') + ' ';
      }

      if (this.category) {
        result += this.category + textPre;
      }

      return result += text;
    }
  }, {
    key: '_shouldLog',
    value: function _shouldLog(level) {
      var logLevel = GlobalLogLevel;
      var levels = (0, _keys2.default)(LogLevels).map(function (f) {
        return LogLevels[f];
      });
      var index = levels.indexOf(level); // What's the index of what it's trying to check if it should log
      var levelIdx = levels.indexOf(logLevel); // What's the current log level index.

      return index >= levelIdx;
    }
  }]);
  return Logger;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLocalStorageAvailable;
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function isLocalStorageAvailable() {
  var mod = '__SPLITSOFTWARE__';
  try {
    localStorage.setItem(mod, mod);
    localStorage.removeItem(mod);
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = exports.default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSplit = validateSplit;

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});
// include BOM and nbsp
var TRIMMABLE_SPACES_REGEX = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/;

function validateSplit(maybeSplit, method) {
  if (maybeSplit == undefined) {
    // eslint-disable-line eqeqeq
    log.error(method + ': you passed a null or undefined split name, split name must be a non-empty string.');
  } else if (!(0, _lang.isString)(maybeSplit)) {
    log.error(method + ': you passed an invalid split name, split name must be a non-empty string.');
  } else {
    if (TRIMMABLE_SPACES_REGEX.test(maybeSplit)) {
      log.warn(method + ': split name "' + maybeSplit + '" has extra whitespace, trimming.');
      maybeSplit = maybeSplit.trim();
    }

    if (maybeSplit.length > 0) {
      return maybeSplit;
    } else {
      log.error(method + ': you passed an empty split name, split name must be a non-empty string.');
    }
  }

  return false;
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(177), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(12).f;
var create = __webpack_require__(40);
var redefineAll = __webpack_require__(67);
var ctx = __webpack_require__(18);
var anInstance = __webpack_require__(68);
var forOf = __webpack_require__(37);
var $iterDefine = __webpack_require__(55);
var step = __webpack_require__(81);
var setSpecies = __webpack_require__(100);
var DESCRIPTORS = __webpack_require__(15);
var fastKey = __webpack_require__(64).fastKey;
var validate = __webpack_require__(69);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(14);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(25);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var core = __webpack_require__(2);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var $export = __webpack_require__(3);
var meta = __webpack_require__(64);
var fails = __webpack_require__(20);
var hide = __webpack_require__(19);
var redefineAll = __webpack_require__(67);
var forOf = __webpack_require__(37);
var anInstance = __webpack_require__(68);
var isObject = __webpack_require__(13);
var setToStringTag = __webpack_require__(35);
var dP = __webpack_require__(12).f;
var each = __webpack_require__(87)(0);
var DESCRIPTORS = __webpack_require__(15);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(43);
var from = __webpack_require__(180);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(3);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(3);
var aFunction = __webpack_require__(32);
var ctx = __webpack_require__(18);
var forOf = __webpack_require__(37);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(187);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var everythingAtTheEnd = /[^.]+$/;
var everythingAfterCount = /count\.([^/]+)$/;
var latencyMetricNameAndBucket = /latency\.([^/]+)\.bucket\.([0-9]+)$/;

var KeyBuilder = function () {
  function KeyBuilder(settings) {
    (0, _classCallCheck3.default)(this, KeyBuilder);

    this.settings = settings;
  }

  (0, _createClass3.default)(KeyBuilder, [{
    key: 'buildSplitKey',
    value: function buildSplitKey(splitName) {
      return this.settings.storage.prefix + '.split.' + splitName;
    }
  }, {
    key: 'buildSplitsTillKey',
    value: function buildSplitsTillKey() {
      return this.settings.storage.prefix + '.splits.till';
    }
  }, {
    key: 'buildSplitsReady',
    value: function buildSplitsReady() {
      return this.settings.storage.prefix + '.splits.ready';
    }
  }, {
    key: 'isSplitKey',
    value: function isSplitKey(key) {
      return (0, _lang.startsWith)(key, this.settings.storage.prefix + '.split.');
    }
  }, {
    key: 'buildSegmentNameKey',
    value: function buildSegmentNameKey(segmentName) {
      return this.settings.storage.prefix + '.segment.' + segmentName;
    }
  }, {
    key: 'buildSegmentTillKey',
    value: function buildSegmentTillKey(segmentName) {
      return this.settings.storage.prefix + '.segment.' + segmentName + '.till';
    }
  }, {
    key: 'buildRegisteredSegmentsKey',
    value: function buildRegisteredSegmentsKey() {
      return this.settings.storage.prefix + '.segments.registered';
    }
  }, {
    key: 'buildSegmentsReady',
    value: function buildSegmentsReady() {
      return this.settings.storage.prefix + '.segments.ready';
    }
  }, {
    key: 'buildVersionablePrefix',
    value: function buildVersionablePrefix() {
      return this.settings.storage.prefix + '/' + this.settings.version + '/' + this.settings.runtime.ip;
    }
  }, {
    key: 'buildImpressionsKey',
    value: function buildImpressionsKey() {
      return this.settings.storage.prefix + '.impressions';
    }
  }, {
    key: 'buildEventsKey',
    value: function buildEventsKey() {
      return this.settings.storage.prefix + '.events';
    }
  }, {
    key: 'buildLatencyKeyPrefix',
    value: function buildLatencyKeyPrefix() {
      return this.buildVersionablePrefix() + '/latency';
    }
  }, {
    key: 'buildLatencyKey',
    value: function buildLatencyKey(metricName, bucketNumber) {
      return this.buildLatencyKeyPrefix() + '.' + metricName + '.bucket.' + bucketNumber;
    }
  }, {
    key: 'buildCountKey',
    value: function buildCountKey(metricName) {
      return this.buildVersionablePrefix() + '/count.' + metricName;
    }
  }, {
    key: 'buildGaugeKey',
    value: function buildGaugeKey(metricName) {
      return this.buildVersionablePrefix() + '/gauge.' + metricName;
    }
  }, {
    key: 'searchPatternForCountKeys',
    value: function searchPatternForCountKeys() {
      return this.buildVersionablePrefix() + '/count.*';
    }
  }, {
    key: 'searchPatternForSplitKeys',
    value: function searchPatternForSplitKeys() {
      return this.settings.storage.prefix + '.split.*';
    }
  }, {
    key: 'searchPatternForLatency',
    value: function searchPatternForLatency() {
      return this.buildLatencyKeyPrefix() + '.*';
    }
  }, {
    key: 'extractKey',
    value: function extractKey(builtKey) {
      var s = builtKey.match(everythingAtTheEnd);

      if (s && s.length) {
        return s[0];
      } else {
        throw 'Invalid latency key provided';
      }
    }
  }, {
    key: 'extractCounterName',
    value: function extractCounterName(counterKey) {
      var m = counterKey.match(everythingAfterCount);

      if (m && m.length) {
        return m[1]; // everything after count
      } else {
        throw 'Invalid counter key provided';
      }
    }
  }, {
    key: 'extractLatencyMetricNameAndBucket',
    value: function extractLatencyMetricNameAndBucket(latencyKey) {
      var parts = latencyKey.match(latencyMetricNameAndBucket);

      if (parts && parts.length > 2) {
        return {
          metricName: parts[1],
          bucketNumber: parts[2]
        };
      } else {
        throw 'Invalid counter key provided';
      }
    }
  }]);
  return KeyBuilder;
}();

exports.default = KeyBuilder;
module.exports = exports.default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(205), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(14);
var aFunction = __webpack_require__(32);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var invoke = __webpack_require__(225);
var html = __webpack_require__(85);
var cel = __webpack_require__(56);
var global = __webpack_require__(4);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(30)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var isObject = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(74);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lang = __webpack_require__(1);

/**
 * Verify type of key and return a valid object key used for get treatment for a
 * specific split.
 */
exports.default = function (key) {
  if ((0, _lang.isObject)(key)) {
    return {
      matchingKey: key.matchingKey,
      bucketingKey: key.bucketingKey
    };
  } else {
    return {
      matchingKey: key,
      bucketingKey: key
    };
  }
}; /**
   Copyright 2016 Split Software

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   **/


module.exports = exports.default;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lang = __webpack_require__(1);

var _inputValidation = __webpack_require__(234);

var _inputValidation2 = _interopRequireDefault(_inputValidation);

var _constants = __webpack_require__(10);

var _inputValidation3 = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BrowserClientFactory(context) {
  var _client$track;

  var settings = context.get(context.constants.SETTINGS);
  var maybeKey = (0, _lang.get)(settings, 'core.key', undefined);
  var maybeTT = (0, _lang.get)(settings, 'core.trafficType', undefined);

  if (settings.mode === _constants.LOCALHOST_MODE && maybeKey === undefined) {
    settings.core.key = 'localhost_key';
  } else {
    settings.core.key = (0, _inputValidation3.validateKey)(maybeKey, 'Client instantiation');
  }

  // Key is also binded to the .track method. Same thing happens with trafficType but only if present on configs. (not required)
  var trackBindings = [settings.core.key];
  if (maybeTT !== undefined) {
    var tt = (0, _inputValidation3.validateTrafficType)(maybeTT, 'Client instantiation');
    settings.core.trafficType = tt;
    trackBindings.push(tt);
  }

  var client = (0, _inputValidation2.default)(context, true, trackBindings.length > 1);
  client.isBrowserClient = true;

  // In the browser land, we can bind the key and the traffic type (if provided)
  client.getTreatment = client.getTreatment.bind(client, settings.core.key);
  client.getTreatments = client.getTreatments.bind(client, settings.core.key);
  client.track = (_client$track = client.track).bind.apply(_client$track, [client].concat(trackBindings));

  return client;
}

exports.default = BrowserClientFactory;
module.exports = exports.default;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroSinceHH = zeroSinceHH;
exports.zeroSinceSS = zeroSinceSS;
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
function zeroSinceHH(millisSinceEpoch /*: number */) /*: number */{
  return new Date(millisSinceEpoch).setUTCHours(0, 0, 0, 0);
}

function zeroSinceSS(millisSinceEpoch /*: number */) /*: number */{
  return new Date(millisSinceEpoch).setUTCSeconds(0, 0);
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function timeout(ms, promise) {
  return new _promise2.default(function (resolve, reject) {
    var tid = setTimeout(function () {
      reject("Operation timed out because it exceeded the configured time limit of " + ms + "ms.");
    }, ms);

    promise.then(function (res) {
      clearTimeout(tid);
      resolve(res);
    }, function (err) {
      clearTimeout(tid);
      reject(err);
    });
  });
}

exports.default = timeout;
module.exports = exports.default;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);
var settle = __webpack_require__(291);
var buildURL = __webpack_require__(293);
var parseHeaders = __webpack_require__(294);
var isURLSameOrigin = __webpack_require__(295);
var createError = __webpack_require__(120);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(296);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(297);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(292);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _SplitNetworkError = __webpack_require__(80);

var _SplitNetworkError2 = _interopRequireDefault(_SplitNetworkError);

var _MySegments = __webpack_require__(308);

var _MySegments2 = _interopRequireDefault(_MySegments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var log = (0, _logger2.default)('splitio-producer:my-segments');


function MySegmentsUpdaterFactory(context) {
  var _context$getAll = context.getAll(),
      settings = _context$getAll[context.constants.SETTINGS],
      readiness = _context$getAll[context.constants.READINESS],
      storage = _context$getAll[context.constants.STORAGE],
      metricCollectors = _context$getAll[context.constants.COLLECTORS];

  var segmentsEventEmitter = readiness.segments;

  var readyOnAlreadyExistentState = true;
  var startingUp = true;

  return function MySegmentsUpdater() {
    var retry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    // NOTE: We only collect metrics on startup.
    return (0, _MySegments2.default)(settings, startingUp, metricCollectors).then(function (segments) {
      // Only when we have downloaded segments completely, we should not keep
      // retrying anymore
      startingUp = false;

      // Update the list of segment names available
      var shouldNotifyUpdate = storage.segments.resetSegments(segments);

      // Notify update if required
      if (shouldNotifyUpdate || readyOnAlreadyExistentState) {
        readyOnAlreadyExistentState = false;
        segmentsEventEmitter.emit(segmentsEventEmitter.SDK_SEGMENTS_ARRIVED);
      }
    }).catch(function (error) {
      if (!(error instanceof _SplitNetworkError2.default)) setTimeout(function () {
        throw error;
      }, 0);

      if (startingUp && settings.startup.retriesOnFailureBeforeReady > retry) {
        retry += 1;
        log.warn('Retrying download of segments #' + retry + '. Reason: ' + error);
        return MySegmentsUpdater(retry);
      } else {
        startingUp = false;
      }

      return false; // shouldUpdate = false
    });
  };
}

exports.default = MySegmentsUpdaterFactory;
module.exports = exports.default;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

exports.default = callbackHandlerContext;

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', { displayAllErrors: true });

var NEW_LISTENER_EVENT = 'newListener';
var REMOVE_LISTENER_EVENT = 'removeListener';

function callbackHandlerContext(gate) {
  var readyCbCount = 0;
  var isReady = false;

  gate.once(gate.SDK_READY, function () {
    if (readyCbCount === 0) log.warn('No listeners for SDK Readiness detected. Incorrect control treatments could have been logged if you called getTreatment/s while the SDK was not yet ready.');

    isReady = true;
  });

  gate.on(REMOVE_LISTENER_EVENT, function (event) {
    if (event === gate.SDK_READY) readyCbCount--;
  });

  gate.on(NEW_LISTENER_EVENT, function (event) {
    if (event === gate.SDK_READY || event === gate.SDK_READY_TIMED_OUT) {
      if (isReady) {
        log.error('A listener was added for ' + (event === gate.SDK_READY ? 'SDK_READY' : 'SDK_READY_TIMED_OUT') + ' on the SDK, which has already fired and won\'t be emitted again. The callback won\'t be executed.');
      } else if (event === gate.SDK_READY) {
        readyCbCount++;
      }
    }
  });

  function generateReadyPromise() {
    var hasCatch = false;
    var promise = new _promise2.default(function (resolve, reject) {
      gate.once(gate.SDK_READY, resolve);
      gate.once(gate.SDK_READY_TIMED_OUT, reject);
    }).catch(function (err) {
      // If the promise has a custom error handler, just propagate
      if (hasCatch) throw err;
      // If not handle the error to prevent unhandled promise exception.
      log.error(err);
    });
    var originalThen = promise.then;

    // Using .catch(fn) is the same than using .then(null, fn)
    promise.then = function () {
      if (arguments.length > 0 && typeof arguments[0] === 'function') readyCbCount++;
      if (arguments.length > 1 && typeof arguments[1] === 'function') hasCatch = true;

      return originalThen.apply(this, arguments);
    };

    return promise;
  }

  function getReadyPromise(forSharedClient) {
    if (forSharedClient) {
      return _promise2.default.resolve();
    }

    // Non-shared clients use the full blown ready promise implementation.
    return generateReadyPromise();
  }

  return getReadyPromise;
}
module.exports = exports.default;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(126);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(127);

exports.default = _index.SplitFactory;
module.exports = exports.default;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplitFactory = SplitFactory;

var _manager = __webpack_require__(128);

var _manager2 = _interopRequireDefault(_manager);

var _storage = __webpack_require__(175);

var _storage2 = _interopRequireDefault(_storage);

var _readiness = __webpack_require__(210);

var _readiness2 = _interopRequireDefault(_readiness);

var _settings = __webpack_require__(215);

var _settings2 = _interopRequireDefault(_settings);

var _context = __webpack_require__(222);

var _context2 = _interopRequireDefault(_context);

var _parser = __webpack_require__(114);

var _parser2 = _interopRequireDefault(_parser);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _timeTracker = __webpack_require__(23);

var _timeTracker2 = _interopRequireDefault(_timeTracker);

var _online = __webpack_require__(231);

var _online2 = _interopRequireDefault(_online);

var _offline = __webpack_require__(325);

var _offline2 = _interopRequireDefault(_offline);

var _constants = __webpack_require__(10);

var _inputValidation = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio');


var buildInstanceId = function buildInstanceId(key, trafficType) {
  return (key.matchingKey ? key.matchingKey : key) + '-' + (key.bucketingKey ? key.bucketingKey : key) + '-' + (trafficType !== undefined ? trafficType : '');
};

function SplitFactory(config) {
  // Cache instances created per factory.
  var instances = {};

  // Tracking times. We need to do it here because we need the storage created.
  var readyLatencyTrackers = {
    splitsReadyTracker: _timeTracker2.default.start(_timeTracker2.default.TaskNames.SPLITS_READY),
    segmentsReadyTracker: _timeTracker2.default.start(_timeTracker2.default.TaskNames.SEGMENTS_READY),
    sdkReadyTracker: _timeTracker2.default.start(_timeTracker2.default.TaskNames.SDK_READY)
  };
  var context = new _context2.default();

  // Put settings config within context
  var settings = (0, _settings2.default)(config);
  context.put(context.constants.SETTINGS, settings);

  // We will just log and allow for the SDK to end up throwing an SDK_TIMEOUT event for devs to handle.
  (0, _inputValidation.validateApiKey)(settings.core.authorizationKey);

  // Put storage config within context
  var storage = (0, _storage2.default)(context);
  var gateFactory = (0, _readiness2.default)();
  context.put(context.constants.STORAGE, storage);

  // Define which type of factory to use
  var splitFactory = settings.mode === _constants.LOCALHOST_MODE ? _offline2.default : _online2.default;

  var _splitFactory = splitFactory(context, gateFactory, readyLatencyTrackers),
      defaultInstance = _splitFactory.api,
      mainClientMetricCollectors = _splitFactory.metricCollectors;

  var parsedDefaultKey = (0, _parser2.default)(settings.core.key);
  var defaultInstanceId = buildInstanceId(parsedDefaultKey, settings.core.trafficType);
  instances[defaultInstanceId] = defaultInstance;

  log.info('New Split SDK instance created.');

  return {
    // Split evaluation and event tracking engine
    client: function client(key, trafficType) {
      if (key === undefined) {
        log.debug('Retrieving default SDK client.');
        return defaultInstance;
      }

      if (typeof storage.shared != 'function') {
        throw 'Shared Client not supported by the storage mechanism. Create isolated instances instead.';
      }

      // Validate the key value
      var validKey = (0, _inputValidation.validateKey)(key, 'Shared Client instantiation');
      if (validKey === false) {
        throw 'Shared Client needs a valid key.';
      }

      var validTrafficType = void 0;
      if (trafficType !== undefined) {
        validTrafficType = (0, _inputValidation.validateTrafficType)(trafficType, 'Shared Client instantiation');
        if (validTrafficType === false) {
          throw 'Shared Client needs a valid traffic type or no traffic type at all.';
        }
      }
      var instanceId = buildInstanceId(validKey, validTrafficType);

      if (!instances[instanceId]) {
        var sharedSettings = settings.overrideKeyAndTT(validKey, validTrafficType);
        var sharedContext = new _context2.default();

        sharedContext.put(context.constants.SETTINGS, sharedSettings);
        sharedContext.put(context.constants.STORAGE, storage.shared(sharedSettings));
        // As shared clients reuse all the storage information, we don't need to check here if we
        // will use offline or online mode. We should stick with the original decision.
        instances[instanceId] = splitFactory(sharedContext, gateFactory, false, mainClientMetricCollectors).api;
        // The readiness should depend on the readiness of the parent, instead of showing ready by default.
        instances[instanceId].ready = defaultInstance.ready;

        log.info('New shared client instance created.');
      } else {
        log.debug('Retrieving existing SDK client.');
      }

      return instances[instanceId];
    },


    // Manager API to explore available information
    manager: function manager() {
      log.info('New manager instance created.');
      return (0, _manager2.default)(storage.splits, context);
    },


    // Logger wrapper API
    Logger: _logger.API,

    // Expose SDK settings
    settings: settings
  };
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

var _lang = __webpack_require__(1);

var _inputValidation = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collectTreatments = function collectTreatments(conditions) {
  // Rollout conditions are supposed to have the entire partitions list, so we find the first one.
  var firstRolloutCondition = (0, _lang.find)(conditions, function (cond) {
    return cond.conditionType === 'ROLLOUT';
  });
  // Then extract the treatments from the partitions
  return firstRolloutCondition ? firstRolloutCondition.partitions.map(function (v) {
    return v.treatment;
  }) : [];
};

var ObjectToView = function ObjectToView(json) {
  var splitObject = void 0;

  try {
    splitObject = JSON.parse(json);
  } catch (e) {
    return null;
  }

  if (splitObject == null) return null;

  return {
    name: splitObject.name,
    trafficType: splitObject.trafficTypeName || null,
    killed: splitObject.killed,
    changeNumber: splitObject.changeNumber || 0,
    treatments: collectTreatments(splitObject.conditions)
  };
};

var ObjectsToViews = function ObjectsToViews(jsons) {
  var views = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(jsons), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var split = _step.value;

      var view = ObjectToView(split);
      if (view != null) views.push(view);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return views;
};

var SplitManagerFactory = function SplitManagerFactory(_splits, context) {
  return {
    split: function split(maybeSplitName) {
      var splitName = (0, _inputValidation.validateSplit)(maybeSplitName, 'split');
      if (!(0, _inputValidation.validateIfOperational)(context) || !splitName) {
        return null;
      }

      var split = _splits.getSplit(splitName);

      if ((0, _thenable2.default)(split)) return split.then(function (result) {
        return ObjectToView(result);
      });
      return ObjectToView(split);
    },
    splits: function splits() {
      if (!(0, _inputValidation.validateIfOperational)(context)) {
        return [];
      }
      var currentSplits = _splits.getAll();

      if ((0, _thenable2.default)(currentSplits)) return currentSplits.then(ObjectsToViews);
      return ObjectsToViews(currentSplits);
    },
    names: function names() {
      if (!(0, _inputValidation.validateIfOperational)(context)) {
        return [];
      }
      return _splits.getKeys();
    }
  };
};

exports.default = SplitManagerFactory;
module.exports = exports.default;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
__webpack_require__(22);
module.exports = __webpack_require__(137);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(131);
var step = __webpack_require__(81);
var Iterators = __webpack_require__(25);
var toIObject = __webpack_require__(26);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(40);
var descriptor = __webpack_require__(33);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(19)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(14);
var getKeys = __webpack_require__(34);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(26);
var toLength = __webpack_require__(41);
var toAbsoluteIndex = __webpack_require__(135);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);
var defined = __webpack_require__(54);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var get = __webpack_require__(62);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
module.exports = __webpack_require__(2).Array.filter;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $filter = __webpack_require__(87)(2);

$export($export.P + $export.F * !__webpack_require__(143)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(142);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(88);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(20);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(24);
module.exports = __webpack_require__(63).f('iterator');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
__webpack_require__(46);
__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(15);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(83);
var META = __webpack_require__(64).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(60);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(42);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(63);
var wksDefine = __webpack_require__(65);
var enumKeys = __webpack_require__(149);
var isArray = __webpack_require__(88);
var anObject = __webpack_require__(14);
var isObject = __webpack_require__(13);
var toIObject = __webpack_require__(26);
var toPrimitive = __webpack_require__(57);
var createDesc = __webpack_require__(33);
var _create = __webpack_require__(40);
var gOPNExt = __webpack_require__(150);
var $GOPD = __webpack_require__(90);
var $DP = __webpack_require__(12);
var $keys = __webpack_require__(34);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(89).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(45).f = $propertyIsEnumerable;
  __webpack_require__(66).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(31)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(66);
var pIE = __webpack_require__(45);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(26);
var gOPN = __webpack_require__(89).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65)('asyncIterator');


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65)('observable');


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
module.exports = __webpack_require__(2).Number.isFinite;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(3);
var _isFinite = __webpack_require__(4).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(27);
var $keys = __webpack_require__(34);

__webpack_require__(91)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateApiKey = validateApiKey;

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});

function validateApiKey(maybeApiKey) {
  if (maybeApiKey == undefined) {
    // eslint-disable-line eqeqeq
    log.error('Factory instantiation: you passed a null or undefined api_key, api_key must be a non-empty string.');
  } else if ((0, _lang.isString)(maybeApiKey)) {
    if (maybeApiKey.length > 0) return maybeApiKey;

    log.error('Factory instantiation: you passed an empty api_key, api_key must be a non-empty string.');
  } else {
    log.error('Factory instantiation: you passed an invalid api_key, api_key must be a non-empty string.');
  }

  return false;
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(161) });


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(66);
var pIE = __webpack_require__(45);
var toObject = __webpack_require__(27);
var IObject = __webpack_require__(53);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(163);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(166);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(167);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(165), __webpack_require__(48)))

/***/ }),
/* 165 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 167 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAttributes = validateAttributes;

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});

function validateAttributes(maybeAttrs, method) {
  // Attributes are optional
  if ((0, _lang.isObject)(maybeAttrs) || maybeAttrs == undefined) // eslint-disable-line eqeqeq
    return maybeAttrs;

  log.error(method + ': attributes must be a plain object.');
  return false;
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEvent = validateEvent;

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});

var EVENT_TYPE_REGEX = /^[a-zA-Z0-9][-_.:a-zA-Z0-9]{0,79}$/;

function validateEvent(maybeEvent, method) {
  if (maybeEvent == undefined) {
    // eslint-disable-line eqeqeq
    log.error(method + ': you passed a null or undefined event_type, event_type must be a non-empty string.');
  } else if (!(0, _lang.isString)(maybeEvent)) {
    log.error(method + ': you passed an invalid event_type, event_type must be a non-empty string.');
  } else {
    // It is a string.
    if (maybeEvent.length === 0) {
      log.error(method + ': you passed an empty event_type, event_type must be a non-empty string.');
    } else if (!EVENT_TYPE_REGEX.test(maybeEvent)) {
      log.error(method + ': you passed "' + maybeEvent + '", event_type must adhere to the regular expression /^[a-zA-Z0-9][-_.:a-zA-Z0-9]{0,79}$/g. This means an event_type must be alphanumeric, cannot be more than 80 characters long, and can only include a dash, underscore, period, or colon as separators of alphanumeric characters.');
    } else {
      return maybeEvent;
    }
  }

  return false;
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEventValue = validateEventValue;

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});

function validateEventValue(maybeValue, method) {
  if ((0, _lang.isFinite)(maybeValue) || maybeValue == undefined) // eslint-disable-line eqeqeq
    return maybeValue;

  log.error(method + ': value must be a finite number.');
  return false;
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateKey = validateKey;

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});

var KEY_MAX_LENGTH = 250;

function validateKeyValue(maybeKey, method, type) {
  if (maybeKey == undefined) {
    // eslint-disable-line eqeqeq
    log.error(method + ': you passed a null or undefined ' + type + ', ' + type + ' must be a non-empty string.');
  } else if ((0, _lang.isFinite)(maybeKey) || (0, _lang.isString)(maybeKey)) {
    if ((0, _lang.isFinite)(maybeKey)) {
      log.warn(method + ': ' + type + ' "' + maybeKey + '" is not of type string, converting.');
      return (0, _lang.toString)(maybeKey);
    }
    // It's a string, start by trimming the value.
    maybeKey = maybeKey.trim();

    // It's aaaaaall good.
    if (maybeKey.length > 0 && maybeKey.length <= KEY_MAX_LENGTH) return maybeKey;

    if (maybeKey.length === 0) {
      log.error(method + ': you passed an empty string, ' + type + ' must be a non-empty string.');
    } else if (maybeKey.length > KEY_MAX_LENGTH) {
      log.error(method + ': ' + type + ' too long, ' + type + ' must be 250 characters or less.');
    }
  } else {
    log.error(method + ': you passed an invalid ' + type + ' type, ' + type + ' must be a non-empty string.');
  }

  return false;
}

function validateKey(maybeKey, method) {
  if ((0, _lang.isObject)(maybeKey)) {
    // Validate key object
    var matchingKey = validateKeyValue(maybeKey.matchingKey, method, 'matchingKey');
    var bucketingKey = validateKeyValue(maybeKey.bucketingKey, method, 'bucketingKey');

    if (matchingKey && bucketingKey) return {
      matchingKey: matchingKey, bucketingKey: bucketingKey
    };

    log.error(method + ': Key must be an object with bucketingKey and matchingKey with valid string properties.');
    return false;
  } else {
    return validateKeyValue(maybeKey, method, 'key');
  }
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSplits = validateSplits;

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _split = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});

function validateSplits(maybeSplits, method) {
  if (Array.isArray(maybeSplits) && maybeSplits.length > 0) {
    var validatedArray = [];
    // Remove invalid values
    maybeSplits.forEach(function (maybeSplit) {
      var splitName = (0, _split.validateSplit)(maybeSplit);
      if (splitName) validatedArray.push(splitName);
    });

    // Strip off duplicated values if we have valid split names then return
    if (validatedArray.length) return (0, _lang.uniq)(validatedArray);
  }

  log.error(method + ': split_names must be a non-empty array.');
  return false;
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateTrafficType = validateTrafficType;

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});

var CAPITAL_LETTERS_REGEX = /[A-Z]/;

function validateTrafficType(maybeTT, method) {
  if (maybeTT == undefined) {
    // eslint-disable-line eqeqeq
    log.error(method + ': you passed a null or undefined traffic_type_name, traffic_type_name must be a non-empty string.');
  } else if (!(0, _lang.isString)(maybeTT)) {
    log.error(method + ': you passed an invalid traffic_type_name, traffic_type_name must be a non-empty string.');
  } else {
    if (maybeTT.length === 0) {
      log.error(method + ': you passed an empty traffic_type_name, traffic_type_name must be a non-empty string.');
    } else {
      if (CAPITAL_LETTERS_REGEX.test(maybeTT)) {
        log.warn(method + ': traffic_type_name should be all lowercase - converting string to lowercase.');
        maybeTT = maybeTT.toLowerCase();
      }

      return maybeTT;
    }
  }

  return false;
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateIfOperational = validateIfOperational;

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('', {
  displayAllErrors: true
});

function validateIfOperational(context) {
  if (!context.get(context.constants.DESTROYED, true)) return true;

  log.error('Client has already been destroyed - no calls possible.');
  return false;
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InMemory = __webpack_require__(176);

var _InMemory2 = _interopRequireDefault(_InMemory);

var _InLocalStorage = __webpack_require__(190);

var _InLocalStorage2 = _interopRequireDefault(_InLocalStorage);

var _InMemory3 = __webpack_require__(194);

var _InMemory4 = _interopRequireDefault(_InMemory3);

var _InLocalStorage3 = __webpack_require__(195);

var _InLocalStorage4 = _interopRequireDefault(_InLocalStorage3);

var _InMemory5 = __webpack_require__(196);

var _InMemory6 = _interopRequireDefault(_InMemory5);

var _InMemory7 = __webpack_require__(197);

var _InMemory8 = _interopRequireDefault(_InMemory7);

var _InMemory9 = __webpack_require__(200);

var _InMemory10 = _interopRequireDefault(_InMemory9);

var _InMemory11 = __webpack_require__(201);

var _InMemory12 = _interopRequireDefault(_InMemory11);

var _Keys = __webpack_require__(107);

var _Keys2 = _interopRequireDefault(_Keys);

var _KeysLocalStorage = __webpack_require__(202);

var _KeysLocalStorage2 = _interopRequireDefault(_KeysLocalStorage);

var _constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserStorageFactory = function BrowserStorageFactory(context) {
  var settings = context.get(context.constants.SETTINGS);
  var storage = settings.storage;


  switch (storage.type) {
    case _constants.STORAGE_MEMORY:
      {
        var keys = new _Keys2.default(settings);

        return {
          splits: new _InMemory2.default(),
          segments: new _InMemory4.default(keys),
          impressions: new _InMemory6.default(),
          metrics: new _InMemory8.default(),
          count: new _InMemory10.default(),
          events: new _InMemory12.default(context),

          // When using shared instanciation with MEMORY we reuse everything but segments (they are customer per key).
          shared: function shared(settings) {
            var childKeyBuilder = new _Keys2.default(settings);

            return {
              splits: this.splits,
              segments: new _InMemory4.default(childKeyBuilder),
              impressions: this.impressions,
              metrics: this.metrics,
              count: this.count,
              events: this.events,

              destroy: function destroy() {
                this.splits = new _InMemory2.default();
                this.segments.flush();
              }
            };
          },
          destroy: function destroy() {
            this.splits.flush();
            this.segments.flush();
            this.impressions.clear();
            this.metrics.clear();
            this.count.clear();
            this.events.clear();
          }
        };
      }

    case _constants.STORAGE_LOCALSTORAGE:
      {
        var _keys = new _KeysLocalStorage2.default(settings);

        return {
          splits: new _InLocalStorage2.default(_keys),
          segments: new _InLocalStorage4.default(_keys),
          impressions: new _InMemory6.default(),
          metrics: new _InMemory8.default(),
          count: new _InMemory10.default(),
          events: new _InMemory12.default(context),

          // When using shared instanciation with MEMORY we reuse everything but segments (they are customer per key).
          shared: function shared(settings) {
            var childKeysBuilder = new _KeysLocalStorage2.default(settings);

            return {
              splits: this.splits,
              segments: new _InLocalStorage4.default(childKeysBuilder),
              impressions: this.impressions,
              metrics: this.metrics,
              count: this.count,
              events: this.events,

              destroy: function destroy() {
                this.splits = new _InMemory2.default();
                this.segments = new _InMemory4.default(childKeysBuilder);
              }
            };
          },
          destroy: function destroy() {
            this.splits = new _InMemory2.default();
            this.segments = new _InMemory4.default(new _Keys2.default(settings));
            this.impressions.clear();
            this.metrics.clear();
            this.count.clear();
            this.events.clear();
          }
        };
      }

    default:
      throw new Error('Unsupported storage type');
  }
};

exports.default = BrowserStorageFactory;
module.exports = exports.default;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(96);

var _map2 = _interopRequireDefault(_map);

var _toConsumableArray2 = __webpack_require__(49);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(106);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SplitCacheInMemory = function () {
  function SplitCacheInMemory() {
    (0, _classCallCheck3.default)(this, SplitCacheInMemory);

    this.flush();
  }

  (0, _createClass3.default)(SplitCacheInMemory, [{
    key: "addSplit",
    value: function addSplit(splitName, split) {
      this.splitCache.set(splitName, split);

      return true;
    }
  }, {
    key: "addSplits",
    value: function addSplits(entries) {
      var results = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(entries), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

          var key = _ref2[0];
          var value = _ref2[1];

          results.push(this.addSplit(key, value));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return results;
    }
  }, {
    key: "removeSplit",
    value: function removeSplit(splitName) {
      this.splitCache.delete(splitName);

      return 1;
    }
  }, {
    key: "removeSplits",
    value: function removeSplits(splitNames) {
      var _this = this;

      splitNames.forEach(function (n) {
        return _this.splitCache.delete(n);
      });

      return splitNames.length;
    }
  }, {
    key: "getSplit",
    value: function getSplit(splitName) {
      return this.splitCache.get(splitName);
    }
  }, {
    key: "setChangeNumber",
    value: function setChangeNumber(changeNumber) {
      this.changeNumber = changeNumber;

      return true;
    }
  }, {
    key: "getChangeNumber",
    value: function getChangeNumber() {
      return this.changeNumber;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return [].concat((0, _toConsumableArray3.default)(this.splitCache.values()));
    }
  }, {
    key: "getKeys",
    value: function getKeys() {
      return [].concat((0, _toConsumableArray3.default)(this.splitCache.keys()));
    }
  }, {
    key: "flush",
    value: function flush() {
      this.splitCache = new _map2.default();
      this.changeNumber = -1;
    }
  }]);
  return SplitCacheInMemory;
}();

exports.default = SplitCacheInMemory;
module.exports = exports.default;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(22);
__webpack_require__(24);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(181);
__webpack_require__(182);
module.exports = __webpack_require__(2).Map;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(97);
var validate = __webpack_require__(69);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(101)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(102)('Map') });


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(37);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(103)('Map');


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(104)('Map');


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(185);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(18);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(27);
var call = __webpack_require__(98);
var isArrayIter = __webpack_require__(99);
var toLength = __webpack_require__(41);
var createProperty = __webpack_require__(186);
var getIterFn = __webpack_require__(62);

$export($export.S + $export.F * !__webpack_require__(105)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(33);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(188), __esModule: true };

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
__webpack_require__(22);
module.exports = __webpack_require__(189);


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(43);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNan = __webpack_require__(191);

var _isNan2 = _interopRequireDefault(_isNan);

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(106);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-storage:localstorage');

var SplitCacheLocalStorage = function () {
  function SplitCacheLocalStorage(keys) {
    (0, _classCallCheck3.default)(this, SplitCacheLocalStorage);

    this.keys = keys;
  }

  (0, _createClass3.default)(SplitCacheLocalStorage, [{
    key: 'addSplit',
    value: function addSplit(splitName, split) {
      try {
        localStorage.setItem(this.keys.buildSplitKey(splitName), split);
        return true;
      } catch (e) {
        log.error(e);
        return false;
      }
    }
  }, {
    key: 'addSplits',
    value: function addSplits(entries) {
      var results = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(entries), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

          var key = _ref2[0];
          var value = _ref2[1];

          results.push(this.addSplit(key, value));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return results;
    }
  }, {
    key: 'removeSplit',
    value: function removeSplit(splitName) {
      try {
        localStorage.removeItem(this.keys.buildSplitKey(splitName));
        return 1;
      } catch (e) {
        log.error(e);
        return 0;
      }
    }

    /**
     * Bulk delete of splits from LocalStorage. Returns the number of deleted keys.
     */

  }, {
    key: 'removeSplits',
    value: function removeSplits(names) {
      var i = 0;
      var len = names.length;
      var counter = 0;

      for (; i < len; i++) {
        counter += this.removeSplit(names[i]);
      }

      return counter;
    }
  }, {
    key: 'getSplit',
    value: function getSplit(splitName) {
      return localStorage.getItem(this.keys.buildSplitKey(splitName));
    }
  }, {
    key: 'setChangeNumber',
    value: function setChangeNumber(changeNumber) {
      try {
        localStorage.setItem(this.keys.buildSplitsTillKey(), changeNumber + '');
        return true;
      } catch (e) {
        log.error(e);
        return false;
      }
    }
  }, {
    key: 'getChangeNumber',
    value: function getChangeNumber() {
      var n = -1;
      var value = localStorage.getItem(this.keys.buildSplitsTillKey());

      if (value !== null) {
        value = parseInt(value, 10);

        return (0, _isNan2.default)(value) ? n : value;
      }

      return n;
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      var len = localStorage.length;
      var accum = [];

      var cur = 0;

      while (cur < len) {
        var key = localStorage.key(cur);
        var value = key && localStorage.getItem(key);

        if (key != null && this.keys.isSplitKey(key) && value) accum.push(value);

        cur++;
      }

      return accum;
    }
  }, {
    key: 'getKeys',
    value: function getKeys() {
      var len = localStorage.length;
      var accum = [];

      var cur = 0;

      while (cur < len) {
        var key = localStorage.key(cur);

        if (key != null && this.keys.isSplitKey(key)) accum.push(this.keys.extractKey(key));

        cur++;
      }

      return accum;
    }
  }, {
    key: 'flush',
    value: function flush() {
      log.info('Flushing localStorage');
      localStorage.clear();
    }
  }]);
  return SplitCacheLocalStorage;
}();

exports.default = SplitCacheLocalStorage;
module.exports = exports.default;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(193);
module.exports = __webpack_require__(2).Number.isNaN;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(3);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = __webpack_require__(96);

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SegmentCacheInMemory = function () {
  function SegmentCacheInMemory(keys) {
    (0, _classCallCheck3.default)(this, SegmentCacheInMemory);

    this.keys = keys;
    this.flush();
  }

  (0, _createClass3.default)(SegmentCacheInMemory, [{
    key: "flush",
    value: function flush() {
      this.segmentCache = new _map2.default();
    }
  }, {
    key: "addToSegment",
    value: function addToSegment(segmentName /*, segmentKeys: Array<string>*/) {
      var segmentKey = this.keys.buildSegmentNameKey(segmentName);

      this.segmentCache.set(segmentKey, true);

      return true;
    }
  }, {
    key: "removeFromSegment",
    value: function removeFromSegment(segmentName /*, segmentKeys: Array<string>*/) {
      var segmentKey = this.keys.buildSegmentNameKey(segmentName);

      this.segmentCache.delete(segmentKey);

      return true;
    }

    // @NOTE based on the way we use segments in the browser, this way is the best
    //       option

  }, {
    key: "resetSegments",
    value: function resetSegments(segmentNames) {
      var isDiff = false;
      var index = void 0;
      var s = void 0;

      // Extreme fast => everything is empty
      if (segmentNames.length === 0 && this.segmentCache.size === segmentNames.length) return isDiff;

      // Quick path
      if (this.segmentCache.size !== segmentNames.length) {
        isDiff = true;

        this.segmentCache = new _map2.default();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(segmentNames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            s = _step.value;

            this.addToSegment(s);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        // Slowest path => we need to find at least 1 difference because
        for (index = 0; index < segmentNames.length && this.isInSegment(segmentNames[index]); index++) {
          // TODO: why empty statement?
        }

        if (index < segmentNames.length) {
          isDiff = true;

          this.segmentCache = new _map2.default();
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(segmentNames), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              s = _step2.value;

              this.addToSegment(s);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }

      return isDiff;
    }
  }, {
    key: "isInSegment",
    value: function isInSegment(segmentName /*, key: string*/) {
      var segmentKey = this.keys.buildSegmentNameKey(segmentName);

      return this.segmentCache.get(segmentKey) === true;
    }
  }, {
    key: "setChangeNumber",
    value: function setChangeNumber() /*segmentName: string, changeNumber: number*/{
      return true;
    }
  }, {
    key: "getChangeNumber",
    value: function getChangeNumber() /*segmentName: string*/{
      return -1;
    }
  }, {
    key: "registerSegment",
    value: function registerSegment() /*segment: string*/{
      return false;
    }
  }, {
    key: "registerSegments",
    value: function registerSegments() /*segments: Iterable<string>*/{
      return false;
    }
  }, {
    key: "getRegisteredSegments",
    value: function getRegisteredSegments() {
      return [];
    }
  }]);
  return SegmentCacheInMemory;
}();

exports.default = SegmentCacheInMemory;
module.exports = exports.default;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(36);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-storage:localstorage');

var DEFINED = '1';

var SegmentCacheInLocalStorage = function () {
  function SegmentCacheInLocalStorage(keys) {
    (0, _classCallCheck3.default)(this, SegmentCacheInLocalStorage);

    this.keys = keys;
  }

  (0, _createClass3.default)(SegmentCacheInLocalStorage, [{
    key: 'addToSegment',
    value: function addToSegment(segmentName /*, segmentKeys: Array<string>*/) {
      var segmentKey = this.keys.buildSegmentNameKey(segmentName);

      try {
        localStorage.setItem(segmentKey, DEFINED);
        return true;
      } catch (e) {
        log.error(e);
        return false;
      }
    }
  }, {
    key: 'removeFromSegment',
    value: function removeFromSegment(segmentName /*, segmentKeys: Array<string>*/) {
      var segmentKey = this.keys.buildSegmentNameKey(segmentName);

      try {
        localStorage.removeItem(segmentKey);
        return true;
      } catch (e) {
        log.error(e);
        return false;
      }
    }
  }, {
    key: 'resetSegments',
    value: function resetSegments(segmentNames) {
      var _this = this;

      var isDiff = false;
      var index = void 0;

      // Scan current values from localStorage
      var storedSegmentNames = (0, _keys2.default)(localStorage).reduce(function (accum, key) {
        var segmentName = _this.keys.extractSegmentName(key);

        if (segmentName) accum.push(segmentName);

        return accum;
      }, []);

      // Extreme fast => everything is empty
      if (segmentNames.length === 0 && storedSegmentNames.length === segmentNames.length) return isDiff;

      // Quick path
      if (storedSegmentNames.length !== segmentNames.length) {
        isDiff = true;

        storedSegmentNames.forEach(function (segmentName) {
          return _this.removeFromSegment(segmentName);
        });
        segmentNames.forEach(function (segmentName) {
          return _this.addToSegment(segmentName);
        });
      } else {
        // Slowest path => we need to find at least 1 difference because
        for (index = 0; index < segmentNames.length && storedSegmentNames.indexOf(segmentNames[index]) !== -1; index++) {
          // TODO: why empty statement?
        }

        if (index < segmentNames.length) {
          isDiff = true;

          storedSegmentNames.forEach(function (segmentName) {
            return _this.removeFromSegment(segmentName);
          });
          segmentNames.forEach(function (segmentName) {
            return _this.addToSegment(segmentName);
          });
        }
      }

      return isDiff;
    }
  }, {
    key: 'isInSegment',
    value: function isInSegment(segmentName /*, key: string*/) {
      return localStorage.getItem(this.keys.buildSegmentNameKey(segmentName)) === DEFINED;
    }
  }, {
    key: 'setChangeNumber',
    value: function setChangeNumber() /*segmentName: string, changeNumber: number*/{
      return true;
    }
  }, {
    key: 'getChangeNumber',
    value: function getChangeNumber() /*segmentName: string*/{
      return -1;
    }
  }, {
    key: 'registerSegment',
    value: function registerSegment() /*segment: string*/{
      return false;
    }
  }, {
    key: 'registerSegments',
    value: function registerSegments() /*segments: Iterable<string>*/{
      return false;
    }
  }, {
    key: 'getRegisteredSegments',
    value: function getRegisteredSegments() {
      return [];
    }
  }, {
    key: 'flush',
    value: function flush() {
      log.info('Flushing localStorage');
      localStorage.clear();
    }
  }]);
  return SegmentCacheInLocalStorage;
}();

exports.default = SegmentCacheInLocalStorage;
module.exports = exports.default;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(49);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var ImpressionsCacheInMemory = function () {
  function ImpressionsCacheInMemory() {
    (0, _classCallCheck3.default)(this, ImpressionsCacheInMemory);

    this.queue = [];
  }

  /**
   * Get collected data
   */


  (0, _createClass3.default)(ImpressionsCacheInMemory, [{
    key: "state",
    value: function state() {
      return this.queue;
    }

    /**
     * Store objects in sequential order
     */

  }, {
    key: "track",
    value: function track(data) {
      var _queue;

      (_queue = this.queue).push.apply(_queue, (0, _toConsumableArray3.default)(data));

      return this;
    }

    /**
     * Recycle the collector queue
     */

  }, {
    key: "clear",
    value: function clear() {
      this.queue.length = 0;

      return this;
    }

    /**
     * Hook JSON.stringify to expose the state of the counters
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.queue;
    }

    /**
     * Check if the is data changed from the defaults
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.queue.length === 0;
    }
  }]);
  return ImpressionsCacheInMemory;
}();

exports.default = ImpressionsCacheInMemory;
module.exports = exports.default;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(36);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _findIndex = __webpack_require__(198);

var _findIndex2 = _interopRequireDefault(_findIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LatencyCacheInMemory = function () {
  function LatencyCacheInMemory() {
    (0, _classCallCheck3.default)(this, LatencyCacheInMemory);

    this.clear();
  }

  (0, _createClass3.default)(LatencyCacheInMemory, [{
    key: 'clear',
    value: function clear() {
      this.counters = {};

      return this;
    }
  }, {
    key: 'state',
    value: function state() {
      return this.counters;
    }
  }, {
    key: 'track',
    value: function track(metricName, latency) {
      // Initialize if needed
      if (this.counters[metricName] === undefined) {
        this.counters[metricName] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }

      // +1 based on the latency number
      this.counters[metricName][(0, _findIndex2.default)(latency)]++;

      return this;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return (0, _keys2.default)(this.counters).length === 0;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.counters;
    }
  }]);
  return LatencyCacheInMemory;
}(); /**
     Copyright 2016 Split Software

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
     **/


exports.default = LatencyCacheInMemory;
module.exports = exports.default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _binarySearch = __webpack_require__(199);

var _binarySearch2 = _interopRequireDefault(_binarySearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _binarySearch2.default.bind(null, [1, 1.5, 2.25, 3.38, 5.06, 7.59, 11.39, 17.09, 25.63, 38.44, 57.67, 86.5, 129.75, 194.62, 291.93, 437.89, 656.84, 985.26, 1477.89, 2216.84, 3325.26, 4987.89, 77481.83]);
module.exports = exports.default;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
function bs(items, value) {
  var startIndex = 0;
  var stopIndex = items.length - 1;
  var middle = Math.floor((stopIndex + startIndex) / 2);
  var minIndex = startIndex;
  var maxIndex = stopIndex;

  while (items[middle] !== value && startIndex < stopIndex) {
    // adjust search area
    if (value < items[middle]) {
      stopIndex = middle - 1;
    } else if (value > items[middle]) {
      startIndex = middle + 1;
    }

    // recalculate middle
    middle = Math.floor((stopIndex + startIndex) / 2);
  }

  // correct if middle is out of range
  if (middle < minIndex) {
    middle = minIndex;
  } else if (middle > maxIndex) {
    middle = maxIndex;
  }

  // we want to always return based on strict minor comparation
  if (value < items[middle] && middle > minIndex) {
    return middle - 1;
  }

  return middle;
}

exports.default = bs;
module.exports = exports.default;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(36);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var CountCacheInMemory = function () {
  function CountCacheInMemory() {
    (0, _classCallCheck3.default)(this, CountCacheInMemory);

    this.clear();
  }

  (0, _createClass3.default)(CountCacheInMemory, [{
    key: "clear",
    value: function clear() {
      this.counters = {};

      return this;
    }
  }, {
    key: "state",
    value: function state() {
      return this.counters;
    }
  }, {
    key: "track",
    value: function track(metricName) {
      if (this.counters[metricName] === undefined) this.counters[metricName] = 1;else this.counters[metricName]++;

      return this.counters[metricName];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return (0, _keys2.default)(this.counters).length === 0;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.counters;
    }
  }]);
  return CountCacheInMemory;
}();

exports.default = CountCacheInMemory;
module.exports = exports.default;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventsCache = function () {
  function EventsCache(context) {
    var _this = this;

    (0, _classCallCheck3.default)(this, EventsCache);

    var settings = context.get(context.constants.SETTINGS);
    var eventsModule = context.get(context.constants.EVENTS);

    this.onFullQueue = false;
    this.maxQueue = settings.scheduler.eventsQueueSize;
    this.queue = [];

    if ((0, _thenable2.default)(eventsModule)) {
      eventsModule.then(function (events) {
        _this.onFullQueue = events.flushAndResetTimer;
        _this._checkQueueSize(); // Events is ready, check the queue.
      });
    } else if (typeof eventsModule.flushAndResetTimer === 'function') {
      this.onFullQueue = eventsModule.flushAndResetTimer;
    }
  }

  /**
   * Get the current state of the queue.
   */


  (0, _createClass3.default)(EventsCache, [{
    key: 'state',
    value: function state() {
      return this.queue;
    }

    /**
     * Add a new event object at the end of the queue.
     */

  }, {
    key: 'track',
    value: function track(data) {
      this.queue.push(data);

      this._checkQueueSize();

      return true;
    }

    /**
     * Clear the data stored on the cache.
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.queue = [];

      return this;
    }

    /**
     * Returns the payload we will use for posting data.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.queue;
    }

    /**
     * Check if the cache is empty.
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.queue.length === 0;
    }

    /**
     * Check if the cache queue is full and we need to flush it.
     */

  }, {
    key: '_checkQueueSize',
    value: function _checkQueueSize() {
      // 0 means no maximum value, in case we want to avoid this being triggered.
      if (this.maxQueue > 0 && this.queue.length >= this.maxQueue) {
        this.onFullQueue && this.onFullQueue();
      }
    }
  }]);
  return EventsCache;
}(); /**
     Copyright 2016 Split Software

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
     **/

exports.default = EventsCache;
module.exports = exports.default;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(70);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(71);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(72);

var _inherits3 = _interopRequireDefault(_inherits2);

var _lang = __webpack_require__(1);

var _Keys = __webpack_require__(107);

var _Keys2 = _interopRequireDefault(_Keys);

var _factory = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KeyBuilderForLocalStorage = function (_KeyBuilder) {
  (0, _inherits3.default)(KeyBuilderForLocalStorage, _KeyBuilder);

  function KeyBuilderForLocalStorage() {
    (0, _classCallCheck3.default)(this, KeyBuilderForLocalStorage);
    return (0, _possibleConstructorReturn3.default)(this, (KeyBuilderForLocalStorage.__proto__ || (0, _getPrototypeOf2.default)(KeyBuilderForLocalStorage)).apply(this, arguments));
  }

  (0, _createClass3.default)(KeyBuilderForLocalStorage, [{
    key: 'buildSegmentNameKey',
    value: function buildSegmentNameKey(segmentName) {
      return (0, _factory.matching)(this.settings.core.key) + '.' + this.settings.storage.prefix + '.segment.' + segmentName;
    }
  }, {
    key: 'extractSegmentName',
    value: function extractSegmentName(builtSegmentKeyName) {
      var prefix = (0, _factory.matching)(this.settings.core.key) + '.' + this.settings.storage.prefix + '.segment.';

      if ((0, _lang.startsWith)(builtSegmentKeyName, prefix)) return builtSegmentKeyName.substr(prefix.length);
    }
  }]);
  return KeyBuilderForLocalStorage;
}(_Keys2.default);

exports.default = KeyBuilderForLocalStorage;
module.exports = exports.default;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(204);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(27);
var $getPrototypeOf = __webpack_require__(86);

__webpack_require__(91)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(206);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(207).set });


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(13);
var anObject = __webpack_require__(14);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(18)(Function.call, __webpack_require__(90).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(209);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(40) });


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(211);

var _events2 = _interopRequireDefault(_events);

var _timeTracker = __webpack_require__(23);

var _timeTracker2 = _interopRequireDefault(_timeTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPLITS_READY = 2;
var SEGMENTS_READY = 4;
var SDK_FIRE_READY = SPLITS_READY | SEGMENTS_READY; // 2 + 4 = 6
var SDK_NOTIFY_UPDATE_SINCE_NOW = 8;
var SDK_FIRE_UPDATE = SDK_FIRE_READY | SDK_NOTIFY_UPDATE_SINCE_NOW; // 6 + 8 = 14

var Events = {
  SDK_READY_TIMED_OUT: 'init::timeout',
  SDK_READY: 'init::ready',
  SDK_SPLITS_ARRIVED: 'state::splits-arrived',
  SDK_SEGMENTS_ARRIVED: 'state::segments-arrived',
  SDK_UPDATE: 'state::update',
  READINESS_GATE_CHECK_STATE: 'state::check'
};

/**
 * Machine state to handle the ready / update event propagation.
 */
function GateContext() {
  // Splits are shared through all instances of the same SDK.
  var splitsStatus = 0;
  var splits = new _events2.default();
  splits.SDK_SPLITS_ARRIVED = Events.SDK_SPLITS_ARRIVED;
  // references counter: how many
  var refCount = 0;

  function ReadinessGateFactory(splits, segments, timeout) {
    var gate = new _events2.default();
    var segmentsStatus = 0;
    var status = 0;

    if (timeout > 0) {
      setTimeout(function () {
        if (status < SDK_FIRE_READY) gate.emit(Events.SDK_READY_TIMED_OUT, 'Split SDK emitted SDK_READY_TIMED_OUT event.');
      }, timeout);
    }

    gate.on(Events.READINESS_GATE_CHECK_STATE, function () {
      if (status !== SDK_FIRE_UPDATE && splitsStatus + segmentsStatus === SDK_FIRE_READY) {
        status = SDK_FIRE_UPDATE;
        gate.emit(Events.SDK_READY);
      } else if (status === SDK_FIRE_UPDATE) {
        gate.emit(Events.SDK_UPDATE);
      }
    });

    splits.on(Events.SDK_SPLITS_ARRIVED, function () {
      _timeTracker2.default.stop(_timeTracker2.default.TaskNames.SPLITS_READY);
      splitsStatus = SPLITS_READY;
      gate.emit(Events.READINESS_GATE_CHECK_STATE);
    });

    segments.on(Events.SDK_SEGMENTS_ARRIVED, function () {
      _timeTracker2.default.stop(_timeTracker2.default.TaskNames.SEGMENTS_READY);
      segmentsStatus = SEGMENTS_READY;
      gate.emit(Events.READINESS_GATE_CHECK_STATE);
    });

    return gate;
  }

  /**
   * SDK Readiness Gate Factory
   *
   * The ready state in the browser relay on sharing the splits ready flag across
   * all the gates, and have an extra flag for the segments which is per gate
   * instance.
   */
  function SDKReadinessGateFactory() {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var segments = new _events2.default();
    segments.SDK_SEGMENTS_ARRIVED = Events.SDK_SEGMENTS_ARRIVED;

    var gate = ReadinessGateFactory(splits, segments, timeout);
    gate.SDK_READY = Events.SDK_READY;
    gate.SDK_UPDATE = Events.SDK_UPDATE;
    gate.SDK_READY_TIMED_OUT = Events.SDK_READY_TIMED_OUT;

    // New Gate has been created, so increase the counter
    refCount++;

    return {
      // Emitters
      splits: splits,
      segments: segments,
      gate: gate,
      // Cleanup listeners
      destroy: function destroy() {
        segments.removeAllListeners();
        gate.removeAllListeners();

        if (refCount > 0) refCount--;
        if (refCount === 0) splits.removeAllListeners();
      }
    };
  }

  return SDKReadinessGateFactory;
}

exports.default = GateContext;
module.exports = exports.default;

/***/ }),
/* 211 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(93);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _now = __webpack_require__(214);

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start() {
  var st = (0, _now2.default)();

  return function stop() {
    return Math.round((0, _now2.default)() - st);
  };
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/

exports.default = start;
module.exports = exports.default;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(44);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function nowFactory() {
  if ((typeof performance === 'undefined' ? 'undefined' : (0, _typeof3.default)(performance)) === 'object' && typeof performance.now === 'function') {
    return performance.now.bind(performance);
  } else {
    return Date.now;
  }
}

var now = nowFactory();

exports.default = now;
module.exports = exports.default;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(109);

var _extends3 = _interopRequireDefault(_extends2);

var _create = __webpack_require__(38);

var _create2 = _interopRequireDefault(_create);

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _lang = __webpack_require__(1);

var _language = __webpack_require__(216);

var _language2 = _interopRequireDefault(_language);

var _runtime = __webpack_require__(217);

var _defaults = __webpack_require__(218);

var _defaults2 = _interopRequireDefault(_defaults);

var _storage = __webpack_require__(219);

var _storage2 = _interopRequireDefault(_storage);

var _mode = __webpack_require__(220);

var _mode2 = _interopRequireDefault(_mode);

var _logger = __webpack_require__(0);

var _constants = __webpack_require__(10);

var _package = __webpack_require__(221);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventsEndpointMatcher = /\/(testImpressions|metrics|events)/; /**
                                                                  Copyright 2016 Split Software

                                                                  Licensed under the Apache License, Version 2.0 (the "License");
                                                                  you may not use this file except in compliance with the License.
                                                                  You may obtain a copy of the License at

                                                                      http://www.apache.org/licenses/LICENSE-2.0

                                                                  Unless required by applicable law or agreed to in writing, software
                                                                  distributed under the License is distributed on an "AS IS" BASIS,
                                                                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                  See the License for the specific language governing permissions and
                                                                  limitations under the License.
                                                                  **/

var base = {
  // Define which kind of object you want to retrieve from SplitFactory
  mode: _constants.STANDALONE_MODE,

  core: {
    // API token (tight to an environment)
    authorizationKey: undefined,
    // key used in your system (only required for browser version)
    key: undefined,
    // traffic type for the given key (only used on browser version)
    trafficType: undefined,
    // toggle impressions tracking of labels
    labelsEnabled: true
  },

  scheduler: {
    // fetch feature updates each 30 sec
    featuresRefreshRate: 30,
    // fetch segments updates each 60 sec
    segmentsRefreshRate: 60,
    // publish metrics each 60 sec
    metricsRefreshRate: 60,
    // publish evaluations each 60 sec
    impressionsRefreshRate: 60,
    // fetch offline changes each 15 sec
    offlineRefreshRate: 15,
    // publish events every 60 seconds after the first flush
    eventsPushRate: 60,
    // how many events will be queued before flushing
    eventsQueueSize: 500
  },

  urls: {
    // CDN having all the information for your environment
    sdk: 'https://sdk.split.io/api',
    // Storage for your SDK events
    events: 'https://events.split.io/api'
  },

  // Defines which kind of storage we should instanciate.
  storage: {
    type: _constants.STORAGE_MEMORY
  },

  // Defines if the logs are enabled, SDK wide.
  debug: undefined,

  // Defines the impression listener, but will only be used on NodeJS.
  impressionListener: undefined,

  // Instance version.
  version: _language2.default + '-' + _package.version
};

function fromSecondsToMillis(n) {
  return Math.round(n * 1000);
}

function setupLogger(debugValue) {
  if (typeof debugValue === 'boolean') {
    if (debugValue) {
      _logger.API.enable();
    } else {
      _logger.API.disable();
    }
  } else if (typeof debugValue === 'string') {
    _logger.API.setLogLevel(debugValue);
  }
}

function defaults(custom) {
  var withDefaults = (0, _lang.merge)({}, base, _defaults2.default, custom);

  // Scheduler periods
  withDefaults.scheduler.featuresRefreshRate = fromSecondsToMillis(withDefaults.scheduler.featuresRefreshRate);
  withDefaults.scheduler.segmentsRefreshRate = fromSecondsToMillis(withDefaults.scheduler.segmentsRefreshRate);
  withDefaults.scheduler.metricsRefreshRate = fromSecondsToMillis(withDefaults.scheduler.metricsRefreshRate);
  withDefaults.scheduler.impressionsRefreshRate = fromSecondsToMillis(withDefaults.scheduler.impressionsRefreshRate);
  withDefaults.scheduler.offlineRefreshRate = fromSecondsToMillis(withDefaults.scheduler.offlineRefreshRate);
  withDefaults.scheduler.eventsPushRate = fromSecondsToMillis(withDefaults.scheduler.eventsPushRate);

  // Startup periods
  withDefaults.startup.requestTimeoutBeforeReady = fromSecondsToMillis(withDefaults.startup.requestTimeoutBeforeReady);
  withDefaults.startup.readyTimeout = fromSecondsToMillis(withDefaults.startup.readyTimeout);
  withDefaults.startup.eventsFirstPushWindow = fromSecondsToMillis(withDefaults.startup.eventsFirstPushWindow);

  // ensure a valid SDK mode
  withDefaults.mode = (0, _mode2.default)(withDefaults.core.authorizationKey, withDefaults.mode);

  // ensure a valid Storage based on mode defined.
  withDefaults.storage = (0, _storage2.default)(withDefaults);

  setupLogger(withDefaults.debug);

  return withDefaults;
}

var proto = {
  /**
   * Switch URLs servers based on target.
   *
   * @param {String} target url target
   * @return {String} completed url
   */
  url: function url(target) {
    if (eventsEndpointMatcher.test(target)) {
      return '' + this.urls.events + target;
    }

    return '' + this.urls.sdk + target;
  },


  /**
   * Returns a settings clone with the key and traffic type (if provided) overriden.
   * @param {SplitKey} key
   * @param {string} [trafficType]
   */
  overrideKeyAndTT: function overrideKeyAndTT(key, trafficType) {
    return (0, _assign2.default)((0, _create2.default)(proto), (0, _extends3.default)({}, this, {
      core: (0, _extends3.default)({}, this.core, {
        key: key,
        trafficType: trafficType
      })
    }));
  },


  // Current ip/hostname information (if available)
  runtime: {
    ip: _runtime.ip,
    hostname: _runtime.hostname
  }
};

var SettingsFactory = function SettingsFactory(settings) {
  return (0, _assign2.default)((0, _create2.default)(proto), defaults(settings));
};

exports.default = SettingsFactory;
module.exports = exports.default;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

exports.default = 'javascript';
module.exports = exports.default;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var ip = exports.ip = false;
var hostname = exports.hostname = false;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  startup: {
    // Stress the request time used while starting up the SDK.
    requestTimeoutBeforeReady: 1.5,
    // How many quick retries we will do while starting up the SDK.
    retriesOnFailureBeforeReady: 1,
    // Maximum amount of time used before notifies me a timeout.
    readyTimeout: 1.5,
    // Amount of time we will wait before the first push of events.
    eventsFirstPushWindow: 10
  }
};
module.exports = exports.default;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _isAvailable = __webpack_require__(94);

var _isAvailable2 = _interopRequireDefault(_isAvailable);

var _constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-settings'); /**
                                                     Copyright 2016 Split Software

                                                     Licensed under the Apache License, Version 2.0 (the "License");
                                                     you may not use this file except in compliance with the License.
                                                     You may obtain a copy of the License at

                                                         http://www.apache.org/licenses/LICENSE-2.0

                                                     Unless required by applicable law or agreed to in writing, software
                                                     distributed under the License is distributed on an "AS IS" BASIS,
                                                     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                     See the License for the specific language governing permissions and
                                                     limitations under the License.
                                                     **/

var ParseStorageSettings = function ParseStorageSettings(settings) {
  var mode = settings.mode,
      _settings$storage = settings.storage,
      _settings$storage$typ = _settings$storage.type,
      type = _settings$storage$typ === undefined ? _constants.STORAGE_MEMORY : _settings$storage$typ,
      _settings$storage$opt = _settings$storage.options,
      options = _settings$storage$opt === undefined ? {} : _settings$storage$opt,
      prefix = _settings$storage.prefix;


  if (prefix) {
    prefix += '.SPLITIO';
  } else {
    prefix = 'SPLITIO';
  }

  if (mode === _constants.LOCALHOST_MODE) return {
    type: _constants.STORAGE_MEMORY,
    prefix: prefix
  };

  // If an invalid storage type is provided OR we want to use LOCALSTORAGE and
  // it's not available, fallback into MEMORY
  if (type !== _constants.STORAGE_MEMORY && type !== _constants.STORAGE_LOCALSTORAGE || type === _constants.STORAGE_LOCALSTORAGE && !(0, _isAvailable2.default)()) {
    type = _constants.STORAGE_MEMORY;
    log.warn('Invalid or unavailable storage. Fallbacking into MEMORY storage');
  }

  return {
    type: type,
    options: options,
    prefix: prefix
  };
};

exports.default = ParseStorageSettings;
module.exports = exports.default;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

function mode(key, mode) {
  // Leaving the comparison as is, in case we change the mode name but not the setting.
  if (key === 'localhost') return _constants.LOCALHOST_MODE;

  if ([_constants.STANDALONE_MODE, _constants.PRODUCER_MODE, _constants.CONSUMER_MODE].indexOf(mode) === -1) throw Error('Invalid mode provided');

  return mode;
}

exports.default = mode;
module.exports = exports.default;

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = {"name":"@splitsoftware/splitio","version":"10.6.1","description":"Split SDK","files":["README.md","LICENSE","CHANGES.txt","lib","types/*.d.ts","es"],"repository":"splitio/javascript-client","homepage":"https://github.com/splitio/javascript-client#readme","bugs":"https://github.com/splitio/javascript-client/issues","license":"Apache-2.0","author":"Facundo Cabrera <facundo@split.io>","contributors":[{"name":"Nico Zelaya","email":"nicolas.zelaya@split.io","url":"https://github.com/NicoZelaya"}],"main":"lib/index.js","module":"es/index.js","types":"types","devDependencies":{"axios-mock-adapter":"1.16.0","babel-cli":"6.26.0","babel-core":"6.26.3","babel-loader":"7.1.5","babel-plugin-add-module-exports":"1.0.0","babel-plugin-istanbul":"5.0.1","babel-plugin-syntax-object-rest-spread":"6.13.0","babel-plugin-transform-builtin-extend":"1.1.2","babel-plugin-transform-object-rest-spread":"6.26.0","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.7.0","copyfiles":"2.1.0","core-js":"2.6.0","cross-env":"5.2.0","csv-streamify":"4.0.0","eslint":"5.5.0","karma":"3.0.0","karma-chrome-launcher":"2.2.0","karma-coverage":"1.1.2","karma-tap":"4.1.4","karma-webpack":"3.0.2","lodash":"4.17.11","proxyquire":"2.1.0","puppeteer":"1.12.1","redis-dump":"0.1.10","redis-server":"1.2.2","rimraf":"2.6.3","sinon":"5.1.1","tap-summary":"4.0.0","tape":"4.9.2","tape-catch":"1.0.6","webpack":"3.5.5"},"scripts":{"build-es":"rimraf es && cross-env NODE_ENV=es babel ./src -d es --ignore '__tests__'","postbuild-es":"cross-env NODE_ENV=es node scripts/copy.packages.json.js","build-umd:stats":"webpack --progress --env production --json > ./stats/stat_results.json","build-cjs":"rimraf lib && cross-env NODE_ENV=cjs babel ./src -d lib --ignore '__tests__'","postbuild-cjs":"cross-env NODE_ENV=cjs node scripts/copy.packages.json.js","build-umd":"cross-env NODE_ENV=development webpack","build-min":"cross-env NODE_ENV=production webpack -p","rebuild":"rimraf lib umd es && npm run build-cjs && npm run build-es && npm run build-umd && npm run build-min","rebuild:npm":"rimraf lib es && npm run build-cjs && npm run build-es","lint":"eslint src","test-browser-local":"cross-env NODE_ENV=test karma start karma/local.karma.conf.js","test-browser-e2e-local":"cross-env NODE_ENV=test karma start karma/e2e.local.karma.conf.js","test-browser-ci":"cross-env NODE_ENV=test karma start karma/ci.karma.conf.js","test-browser-e2e-ci":"cross-env NODE_ENV=test karma start karma/e2e.ci.karma.conf.js","test-browser-offline":"cross-env NODE_ENV=test karma start karma/offline.karma.conf.js","test-browser-destroy":"cross-env NODE_ENV=test karma start karma/destroy.ci.karma.conf.js","test-browser-errors":"cross-env NODE_ENV=test karma start karma/errors.ci.karma.conf.js","test-node":"cross-env NODE_ENV=test tape -r babel-register \"src/*/__tests__/**/!(browser).spec.js\" | tap-summary","test-node-e2e":"cross-env NODE_ENV=test tape -r babel-register src/__tests__/node.spec.js | tap-summary","test-node-destroy":"cross-env NODE_ENV=test tape -r babel-register src/__tests__/destroy/node.spec.js | tap-summary","test-node-errors":"cross-env NODE_ENV=test tape -r babel-register src/__tests__/errorCatching/node.spec.js","test-node-offline":"cross-env NODE_ENV=test tape -r babel-register src/__tests__/offline/node.spec.js | tap-summary","test-node-redis":"cross-env NODE_ENV=test tape -r babel-register \"src/__tests__/node_redis.spec.js\" | tap-summary","pretest-ts-decls":"npm run build-es && npm run build-cjs && npm link","test-ts-decls":"./scripts/ts-tests.sh","posttest-ts-decls":"npm unlink && npm install","browser-test-suite":"npm run test-browser-ci && npm run test-browser-e2e-ci && npm run test-browser-offline && npm run test-browser-destroy && npm run test-browser-errors","node-test-suite":"npm run test-node && npm run test-node-e2e && npm run test-node-destroy && npm run test-node-offline && npm run test-node-redis && npm run test-node-errors","test":"npm run browser-test-suite && npm run node-test-suite","canary":"npm run rebuild && npm publish --tag canary","stable":"npm run rebuild && npm publish"},"dependencies":{"@types/node":"10.9.4","axios":"0.18.0","babel-runtime":"6.26.0","ip":"1.1.5","utfx":"1.0.1"},"optionalDependencies":{"ioredis":"3.2.2"},"greenkeeper":{"ignore":["webpack","karma","karma-tap","karma-webpack"]}}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

var _constants = __webpack_require__(230);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
var Context = function () {
  function Context() {
    (0, _classCallCheck3.default)(this, Context);

    this._map = {};
    this.constants = _constants2.default;
  }
  /**
   * Gets an item in the context instance or a promise if the item is not yet stored and we are not doing a one time check.
   * @param {String} name - The name of the item we want to get
   * @return {Any} The item we want to get.
   */


  (0, _createClass3.default)(Context, [{
    key: 'get',
    value: function get(name) {
      var flagCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (typeof name !== 'string' || typeof name === 'string' && !name.length) return; // Wrong usage, don't generate item promise.

      var item = this._map[name];

      // If we have the item, return it.
      if (item !== undefined) {
        return item;
      } else if (!flagCheck) {
        // If we don't and it's not a flag check, return a promise that we will resolve once we receive the item.
        var resolve = void 0;
        var promise = new _promise2.default(function (res) {
          return resolve = res;
        });
        promise.manualResolve = resolve;
        this._map[name] = promise;
        return promise;
      }
    }
    /**
     * Gets all objects stored in the context.
     * @return {Object} - A new map of context-stored items.
     */

  }, {
    key: 'getAll',
    value: function getAll() {
      return (0, _assign2.default)({}, this._map);
    }
    /**
     * Stores an item in the context instance.
     * @param {String} name - The name of what we are storing
     * @param {Any} item - The item can be of any type.
     * @return {Boolean} - The result of the operation
     */

  }, {
    key: 'put',
    value: function put(name, item) {
      var _this = this;

      if (typeof name !== 'string' || typeof name === 'string' && !name.length || item === undefined) return false; // We can't store this.

      var existingItem = this._map[name];

      // Item already exists and no one is waiting for the item. Abort and return false.
      if (existingItem !== undefined && typeof existingItem.manualResolve !== 'function') return false;

      // Someone is waiting for this item, resolve to it.
      if ((0, _thenable2.default)(existingItem) && existingItem.manualResolve) existingItem.manualResolve(item);

      // We are storing a promise, when resolving save the item. On error, clean up the item.
      if ((0, _thenable2.default)(item)) {
        item.then(function (item) {
          _this._map[name] = item;
          return item;
        }).catch(function (err) {
          _this._map[name] = undefined;
          return err;
        });
      }

      this._map[name] = item;
      return true;
    }
  }]);
  return Context;
}();

exports.default = Context;
module.exports = exports.default;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(22);
__webpack_require__(24);
__webpack_require__(224);
__webpack_require__(228);
__webpack_require__(229);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var global = __webpack_require__(4);
var ctx = __webpack_require__(18);
var classof = __webpack_require__(43);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(32);
var anInstance = __webpack_require__(68);
var forOf = __webpack_require__(37);
var speciesConstructor = __webpack_require__(110);
var task = __webpack_require__(111).set;
var microtask = __webpack_require__(226)();
var newPromiseCapabilityModule = __webpack_require__(74);
var perform = __webpack_require__(112);
var userAgent = __webpack_require__(227);
var promiseResolve = __webpack_require__(113);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(67)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(35)($Promise, PROMISE);
__webpack_require__(100)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(105)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var macrotask = __webpack_require__(111).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(30)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(3);
var core = __webpack_require__(2);
var global = __webpack_require__(4);
var speciesConstructor = __webpack_require__(110);
var promiseResolve = __webpack_require__(113);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(3);
var newPromiseCapability = __webpack_require__(74);
var perform = __webpack_require__(112);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SETTINGS: 'settings',
  STORAGE: 'storage',
  READINESS: 'readiness_gate',
  COLLECTORS: 'metrics_collectors',
  EVENTS: 'events_publisher',
  DESTROYED: 'is_destroyed'
};
module.exports = exports.default;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(51);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _create = __webpack_require__(38);

var _create2 = _interopRequireDefault(_create);

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _client = __webpack_require__(115);

var _client2 = _interopRequireDefault(_client);

var _producer = __webpack_require__(282);

var _producer2 = _interopRequireDefault(_producer);

var _Partial = __webpack_require__(311);

var _Partial2 = _interopRequireDefault(_Partial);

var _metrics = __webpack_require__(312);

var _metrics2 = _interopRequireDefault(_metrics);

var _events = __webpack_require__(321);

var _events2 = _interopRequireDefault(_events);

var _listeners = __webpack_require__(324);

var _listeners2 = _interopRequireDefault(_listeners);

var _constants = __webpack_require__(10);

var _callbacksHandler = __webpack_require__(124);

var _callbacksHandler2 = _interopRequireDefault(_callbacksHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Create SDK instance based on the provided configurations
//
function SplitFactoryOnline(context, gateFactory, readyTrackers, mainClientMetricCollectors) {
  var sharedInstance = !!mainClientMetricCollectors;
  var settings = context.get(context.constants.SETTINGS);
  var storage = context.get(context.constants.STORAGE);

  // Put readiness config within context
  var readiness = gateFactory(settings.startup.readyTimeout);
  context.put(context.constants.READINESS, readiness);

  // We are only interested in exposable EventEmitter
  var gate = readiness.gate,
      splits = readiness.splits,
      segments = readiness.segments;

  // Events name

  var SDK_READY = gate.SDK_READY,
      SDK_UPDATE = gate.SDK_UPDATE,
      SDK_READY_TIMED_OUT = gate.SDK_READY_TIMED_OUT;

  // Ready promise

  var readyFlag = (0, _callbacksHandler2.default)(gate)(sharedInstance);

  // Shared instances use parent metrics collectors
  var metrics = sharedInstance ? undefined : (0, _metrics2.default)(context);
  // Shared instances use parent events queue
  var events = sharedInstance ? undefined : (0, _events2.default)(context);
  // Signal listener only needed for main instances
  var signalsListener = sharedInstance ? undefined : new _listeners2.default(context);

  var producer = void 0;

  switch (settings.mode) {
    case _constants.PRODUCER_MODE:
    case _constants.STANDALONE_MODE:
      {
        context.put(context.constants.COLLECTORS, metrics && metrics.collectors);
        // We don't fully instantiate producer if we are creating a shared instance.
        producer = sharedInstance ? (0, _Partial2.default)(context) : (0, _producer2.default)(context);
        break;
      }
    case _constants.CONSUMER_MODE:
      break;
  }

  if (readyTrackers && !sharedInstance) {
    // Only track ready events for non-shared clients
    var sdkReadyTracker = readyTrackers.sdkReadyTracker,
        splitsReadyTracker = readyTrackers.splitsReadyTracker,
        segmentsReadyTracker = readyTrackers.segmentsReadyTracker;

    // Defered setup of collectors for this task, as it is the only ready latency we store on BE.

    sdkReadyTracker.setCollectorForTask(metrics.collectors);

    gate.on(SDK_READY, sdkReadyTracker);
    splits.on(splits.SDK_SPLITS_ARRIVED, splitsReadyTracker);
    segments.on(segments.SDK_SEGMENTS_ARRIVED, segmentsReadyTracker);
  }

  // Start background jobs tasks
  producer && producer.start();
  metrics && metrics.start();
  events && context.put(context.constants.EVENTS, events) && events.start();

  // If no collectors are stored we are on a shared instance, save main one.
  context.put(context.constants.COLLECTORS, mainClientMetricCollectors);

  var api = (0, _assign2.default)(
  // Proto linkage of the EventEmitter to prevent any change
  (0, _create2.default)(gate),
  // getTreatment/s & track
  (0, _client2.default)(context),
  // Utilities
  {
    // Ready promise
    ready: function ready() {
      return readyFlag;
    },


    // Events contants
    Event: {
      SDK_READY: SDK_READY,
      SDK_UPDATE: SDK_UPDATE,
      SDK_READY_TIMED_OUT: SDK_READY_TIMED_OUT
    },

    // Destroy instance
    destroy: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Stop background jobs
                producer && producer.stop();
                metrics && metrics.stop();
                events && events.stop();

                // Send impressions and events in parallel.
                _context.next = 5;
                return _promise2.default.all([metrics && metrics.flush(), events && events.flush()]);

              case 5:

                // Cleanup event listeners
                readiness.destroy();
                signalsListener && signalsListener.stop();

                // Cleanup storage
                storage.destroy && storage.destroy();
                // Mark the factory as destroyed.
                context.put(context.constants.DESTROYED, true);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function destroy() {
        return _ref.apply(this, arguments);
      }

      return destroy;
    }()
  });

  // We'll start the signals listener if the client is not a shared instance.
  // For now, we will only call destroy.
  !sharedInstance && signalsListener.start(api.destroy);

  return {
    api: api,
    metricCollectors: metrics && metrics.collectors
  };
}

exports.default = SplitFactoryOnline;
module.exports = exports.default;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(233);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 233 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _client = __webpack_require__(235);

var _client2 = _interopRequireDefault(_client);

var _inputValidation = __webpack_require__(47);

var _constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * We will validate the input before actually executing the client methods. We should "guard" the client here,
 * while not polluting the "real" implementation of those methods.
 */
function ClientInputValidationLayer(context, isKeyBinded, isTTBinded) {
  var settings = context.get(context.constants.SETTINGS);
  var isStorageSync = settings.storage.type !== _constants.STORAGE_REDIS;

  var client = (0, _client2.default)(context);
  var clientGetTreatment = client.getTreatment;
  var clientGetTreatments = client.getTreatments;
  var clientTrack = client.track;

  client.getTreatment = function getTreatment(maybeKey, maybeSplit, maybeAttributes) {
    var key = isKeyBinded ? maybeKey : (0, _inputValidation.validateKey)(maybeKey, 'getTreatment');
    var split = (0, _inputValidation.validateSplit)(maybeSplit, 'getTreatment');
    var attributes = (0, _inputValidation.validateAttributes)(maybeAttributes, 'getTreatment');
    var isOperational = (0, _inputValidation.validateIfOperational)(context);

    if (isOperational && key && split && attributes !== false) {
      return clientGetTreatment(key, split, attributes);
    } else {
      if (isStorageSync) return _constants.CONTROL;

      return _promise2.default.resolve(_constants.CONTROL);
    }
  };
  client.getTreatments = function getTreatments(maybeKey, maybeSplits, maybeAttributes) {
    var key = isKeyBinded ? maybeKey : (0, _inputValidation.validateKey)(maybeKey, 'getTreatments');
    var splits = (0, _inputValidation.validateSplits)(maybeSplits, 'getTreatments');
    var attributes = (0, _inputValidation.validateAttributes)(maybeAttributes, 'getTreatments');
    var isOperational = (0, _inputValidation.validateIfOperational)(context);

    if (isOperational && key && splits && attributes !== false) {
      return clientGetTreatments(key, splits, attributes);
    } else {
      var res = {};
      if (splits) splits.forEach(function (split) {
        return res[split] = _constants.CONTROL;
      });

      if (isStorageSync) return res;

      return _promise2.default.resolve(res);
    }
  };
  client.track = function track(maybeKey, maybeTT, maybeEvent, maybeEventValue) {
    var key = isKeyBinded ? maybeKey : (0, _inputValidation.validateKey)(maybeKey, 'track');
    var tt = isTTBinded ? maybeTT : (0, _inputValidation.validateTrafficType)(maybeTT, 'track');
    var event = (0, _inputValidation.validateEvent)(maybeEvent, 'track');
    var eventValue = (0, _inputValidation.validateEventValue)(maybeEventValue, 'track');
    var isOperational = (0, _inputValidation.validateIfOperational)(context);

    if (isOperational && key && tt && event && eventValue !== false) {
      return clientTrack(key, tt, event, eventValue);
    } else {
      if (isStorageSync) return false;

      return _promise2.default.resolve(false);
    }
  };

  return client;
}

exports.default = ClientInputValidationLayer;
module.exports = exports.default;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _evaluator = __webpack_require__(236);

var _evaluator2 = _interopRequireDefault(_evaluator);

var _impression = __webpack_require__(280);

var _impression2 = _interopRequireDefault(_impression);

var _impressions = __webpack_require__(281);

var _impressions2 = _interopRequireDefault(_impressions);

var _timeTracker = __webpack_require__(23);

var _timeTracker2 = _interopRequireDefault(_timeTracker);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

var _factory = __webpack_require__(73);

var _constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-client');


function getTreatmentAvailable(evaluation, splitName, key, attributes) {
  var stopLatencyTracker = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var impressionsTracker = arguments[5];

  var matchingKey = (0, _factory.matching)(key);
  var bucketingKey = (0, _factory.bucketing)(key);

  var treatment = evaluation.treatment,
      label = evaluation.label,
      changeNumber = evaluation.changeNumber;


  if (treatment !== _constants.CONTROL) {
    log.info('Split: ' + splitName + '. Key: ' + matchingKey + '. Evaluation: ' + treatment);
  } else if (matchingKey !== false) {
    log.warn('Split ' + splitName + ' doesn\'t exist');
  }

  impressionsTracker({
    feature: splitName,
    keyName: matchingKey,
    treatment: treatment,
    time: Date.now(),
    bucketingKey: bucketingKey,
    label: label,
    changeNumber: changeNumber
  }, attributes);

  stopLatencyTracker && stopLatencyTracker();

  return evaluation.treatment;
}

function queueEventsCallback(_ref, tracked) {
  var eventTypeId = _ref.eventTypeId,
      trafficTypeName = _ref.trafficTypeName,
      key = _ref.key,
      value = _ref.value,
      timestamp = _ref.timestamp;

  var msg = 'event of type "' + eventTypeId + '" for traffic type "' + trafficTypeName + '". Key: ' + key + '. Value: ' + value + '. Timestamp: ' + timestamp + '.';

  if (tracked) {
    log.info('Successfully qeued ' + msg);
  } else {
    log.warn('Failed to queue ' + msg);
  }

  return tracked;
}

function ClientFactory(context) {
  var storage = context.get(context.constants.STORAGE);
  var metricCollectors = context.get(context.constants.COLLECTORS);
  var impressionTracker = (0, _impression2.default)(context);
  var impressionsTracker = (0, _impressions2.default)(context);

  return {
    getTreatment: function getTreatment(key, splitName, attributes) {
      var stopLatencyTracker = _timeTracker2.default.start(_timeTracker2.default.TaskNames.SDK_GET_TREATMENT, metricCollectors);
      var evaluation = (0, _evaluator2.default)(key, splitName, attributes, storage);

      if ((0, _thenable2.default)(evaluation)) {
        return evaluation.then(function (res) {
          return getTreatmentAvailable(res, splitName, key, attributes, stopLatencyTracker, impressionTracker.track);
        });
      } else {
        return getTreatmentAvailable(evaluation, splitName, key, attributes, stopLatencyTracker, impressionTracker.track);
      }
    },
    getTreatments: function getTreatments(key, splitNames, attributes) {
      var stopLatencyTracker = _timeTracker2.default.start(_timeTracker2.default.TaskNames.SDK_GET_TREATMENTS, metricCollectors);
      var results = {};
      var thenables = [];
      var i = void 0;

      var _loop = function _loop() {
        var splitName = splitNames[i];
        var evaluation = (0, _evaluator2.default)(key, splitName, attributes, storage);

        if ((0, _thenable2.default)(evaluation)) {
          // If treatment returns a promise as it is being evaluated, save promise for progress tracking.
          thenables.push(evaluation);
          evaluation.then(function (res) {
            // set the treatment on the cb;
            results[splitName] = getTreatmentAvailable(res, splitName, key, attributes, false, impressionsTracker.queue);
          });
        } else {
          results[splitName] = getTreatmentAvailable(evaluation, splitName, key, attributes, false, impressionsTracker.queue);
        }
      };

      for (i = 0; i < splitNames.length; i++) {
        _loop();
      }

      var wrapUp = function wrapUp() {
        impressionsTracker.track();
        stopLatencyTracker();
        // After all treatments are resolved, we return the mapping object.
        return results;
      };

      if (thenables.length) {
        return _promise2.default.all(thenables).then(wrapUp);
      } else {
        return wrapUp();
      }
    },
    track: function track(key, trafficTypeName, eventTypeId, eventValue) {
      var matchingKey = (0, _factory.matching)(key);
      var timestamp = Date.now();
      // if eventValue is undefined we convert it to null so the BE can handle a non existence value
      var value = eventValue === undefined ? null : eventValue;
      var eventData = {
        eventTypeId: eventTypeId,
        trafficTypeName: trafficTypeName,
        value: value,
        timestamp: timestamp,
        key: matchingKey
      };
      var tracked = storage.events.track(eventData);

      if ((0, _thenable2.default)(tracked)) {
        return tracked.then(queueEventsCallback.bind(null, eventData));
      } else {
        return queueEventsCallback(eventData, tracked);
      }
    }
  };
}

exports.default = ClientFactory;
module.exports = exports.default;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _ = __webpack_require__(237);

var _2 = _interopRequireDefault(_);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

var _labels = __webpack_require__(52);

var _labels2 = _interopRequireDefault(_labels);

var _constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function splitEvaluator(key, splitName, attributes, storage) {
  var splitObject = void 0;

  try {
    splitObject = storage.splits.getSplit(splitName);
  } catch (e) {
    // the only scenario where getSplit can throw an error is when the storage
    // is redis and there is a connection issue and we can't retrieve the split
    // to be evaluated
    return _promise2.default.resolve({
      treatment: _constants.CONTROL,
      label: _labels2.default.EXCEPTION
    });
  }

  if ((0, _thenable2.default)(splitObject)) {
    return splitObject.then(function (result) {
      return getEvaluation(result, key, attributes, storage);
    });
  }

  return getEvaluation(splitObject, key, attributes, storage);
}

function getEvaluation(splitObject, key, attributes, storage) {
  var evaluation = {
    treatment: _constants.CONTROL,
    label: _labels2.default.SPLIT_NOT_FOUND
  };

  if (splitObject) {
    var split = _2.default.parse(JSON.parse(splitObject), storage);

    evaluation = split.getTreatment(key, attributes, splitEvaluator);

    // If the storage is async, evaluation and changeNumber will return a
    // thenable
    if ((0, _thenable2.default)(evaluation)) {
      return evaluation.then(function (result) {
        result.changeNumber = split.getChangeNumber();

        return result;
      });
    } else {
      evaluation.changeNumber = split.getChangeNumber(); // Always sync and optional
    }
  }

  return evaluation;
}

exports.default = splitEvaluator;
module.exports = exports.default;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(238);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _lang = __webpack_require__(1);

var _parser = __webpack_require__(239);

var _parser2 = _interopRequireDefault(_parser);

var _parser3 = __webpack_require__(114);

var _parser4 = _interopRequireDefault(_parser3);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

var _labels = __webpack_require__(52);

var _labels2 = _interopRequireDefault(_labels);

var _constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function defaults(inst) {
  // in case we don't have a default treatment in the instanciation, use 'control'
  if (typeof inst.baseInfo.defaultTreatment !== 'string') {
    inst.baseInfo.defaultTreatment = _constants.CONTROL;
  }
}

function evaluationResult(result, defaultTreatment) {
  return {
    treatment: (0, _lang.get)(result, 'treatment', defaultTreatment),
    label: (0, _lang.get)(result, 'label', _labels2.default.NO_CONDITION_MATCH)
  };
}

function Split(baseInfo, evaluator) {
  if (!(this instanceof Split)) {
    return new Split(baseInfo, evaluator);
  }

  this.baseInfo = baseInfo;
  this.evaluator = evaluator;

  defaults(this);
}

Split.parse = function parse(splitFlatStructure, storage) {
  var conditions = splitFlatStructure.conditions,
      baseInfo = (0, _objectWithoutProperties3.default)(splitFlatStructure, ['conditions']);

  var evaluator = (0, _parser2.default)(conditions, storage);

  return new Split(baseInfo, evaluator);
};

Split.prototype.getKey = function getKey() {
  return this.baseInfo.name;
};

Split.prototype.getTreatment = function getTreatment(key, attributes, splitEvaluator) {
  var _baseInfo = this.baseInfo,
      killed = _baseInfo.killed,
      seed = _baseInfo.seed,
      defaultTreatment = _baseInfo.defaultTreatment,
      trafficAllocation = _baseInfo.trafficAllocation,
      trafficAllocationSeed = _baseInfo.trafficAllocationSeed,
      algo = _baseInfo.algo;

  var parsedKey = void 0;
  var treatment = void 0;
  var label = void 0;

  try {
    parsedKey = (0, _parser4.default)(key);
  } catch (err) {
    return {
      treatment: _constants.CONTROL,
      label: _labels2.default.EXCEPTION
    };
  }

  if (this.isGarbage()) {
    treatment = _constants.CONTROL;
    label = _labels2.default.SPLIT_ARCHIVED;
  } else if (killed) {
    treatment = defaultTreatment;
    label = _labels2.default.SPLIT_KILLED;
  } else {
    var evaluation = this.evaluator(parsedKey, seed, trafficAllocation, trafficAllocationSeed, attributes, algo, splitEvaluator);

    // Evaluation could be async, so we should handle that case checking for a
    // thenable object
    if ((0, _thenable2.default)(evaluation)) {
      return evaluation.then(function (result) {
        return evaluationResult(result, defaultTreatment);
      });
    } else {
      return evaluationResult(evaluation, defaultTreatment);
    }
  }

  return {
    treatment: treatment,
    label: label
  };
};

Split.prototype.isGarbage = function isGarbage() {
  return this.baseInfo.status === 'ARCHIVED';
};

Split.prototype.getChangeNumber = function getChangeNumber() {
  return this.baseInfo.changeNumber;
};

exports.default = Split;
module.exports = exports.default;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _matchers = __webpack_require__(240);

var _matchers2 = _interopRequireDefault(_matchers);

var _treatments = __webpack_require__(250);

var _treatments2 = _interopRequireDefault(_treatments);

var _matchers3 = __webpack_require__(251);

var _matchers4 = _interopRequireDefault(_matchers3);

var _value = __webpack_require__(270);

var _value2 = _interopRequireDefault(_value);

var _condition = __webpack_require__(272);

var _condition2 = _interopRequireDefault(_condition);

var _ifelseif = __webpack_require__(278);

var _ifelseif2 = _interopRequireDefault(_ifelseif);

var _and = __webpack_require__(279);

var _and2 = _interopRequireDefault(_and);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function parse(conditions, storage) {
  var predicates = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(conditions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var condition = _step.value;
      var matchers = condition.matcherGroup.matchers,
          partitions = condition.partitions,
          label = condition.label,
          conditionType = condition.conditionType;

      // transform data structure

      matchers = (0, _matchers2.default)(matchers);

      // create a set of pure functions from the matcher's dto
      var expressions = matchers.map(function (matcherDto) {
        var matcher = (0, _matchers4.default)(matcherDto, storage);

        // Evaluator function.
        return function (key, attributes, splitEvaluator) {
          var value = (0, _value2.default)(key, matcherDto, attributes);
          var result = value !== undefined ? matcher(value, splitEvaluator) : false;

          if ((0, _thenable2.default)(result)) {
            return result.then(function (res) {
              return Boolean(res ^ matcherDto.negate);
            });
          }
          return Boolean(result ^ matcherDto.negate);
        };
      });

      // if matcher's factory can't instanciate the matchers, the expressions array
      // will be empty
      if (expressions.length === 0) {
        // reset any data collected during parsing
        predicates = [];
        // and break the loop
        break;
      }

      predicates.push((0, _condition2.default)((0, _and2.default)(expressions), _treatments2.default.parse(partitions), label, conditionType));
    }

    // Instanciate evaluator given the set of conditions using if else if logic
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return (0, _ifelseif2.default)(predicates);
}

exports.default = parse;
module.exports = exports.default;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lang = __webpack_require__(1);

var _types = __webpack_require__(75);

var _segment = __webpack_require__(241);

var _segment2 = _interopRequireDefault(_segment);

var _whitelist = __webpack_require__(242);

var _whitelist2 = _interopRequireDefault(_whitelist);

var _set = __webpack_require__(248);

var _set2 = _interopRequireDefault(_set);

var _unaryNumeric = __webpack_require__(249);

var _unaryNumeric2 = _interopRequireDefault(_unaryNumeric);

var _convertions = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Flat the complex matcherGroup structure into something handy.
function transform(matchers) {

  var parsedMatchers = matchers.map(function (matcher) {
    var matcherType = matcher.matcherType,
        negate = matcher.negate,
        keySelector = matcher.keySelector,
        segmentObject = matcher.userDefinedSegmentMatcherData,
        whitelistObject = matcher.whitelistMatcherData,
        unaryNumericObject = matcher.unaryNumericMatcherData,
        betweenObject = matcher.betweenMatcherData,
        dependencyObject = matcher.dependencyMatcherData,
        booleanMatcherData = matcher.booleanMatcherData,
        stringMatcherData = matcher.stringMatcherData;


    var attribute = keySelector && keySelector.attribute;
    var type = (0, _types.mapper)(matcherType);
    // As default input data type we use string (even for ALL_KEYS)
    var dataType = _types.dataTypes.STRING;
    var value = undefined;

    if (type === _types.types.SEGMENT) {
      value = (0, _segment2.default)(segmentObject);
    } else if (type === _types.types.WHITELIST) {
      value = (0, _whitelist2.default)(whitelistObject);
    } else if (type === _types.types.EQUAL_TO) {
      value = (0, _unaryNumeric2.default)(unaryNumericObject);
      dataType = _types.dataTypes.NUMBER;

      if (unaryNumericObject.dataType === 'DATETIME') {
        value = (0, _convertions.zeroSinceHH)(value);
        dataType = _types.dataTypes.DATETIME;
      }
    } else if (type === _types.types.GREATER_THAN_OR_EQUAL_TO || type === _types.types.LESS_THAN_OR_EQUAL_TO) {
      value = (0, _unaryNumeric2.default)(unaryNumericObject);
      dataType = _types.dataTypes.NUMBER;

      if (unaryNumericObject.dataType === 'DATETIME') {
        value = (0, _convertions.zeroSinceSS)(value);
        dataType = _types.dataTypes.DATETIME;
      }
    } else if (type === _types.types.BETWEEN) {
      value = betweenObject;
      dataType = _types.dataTypes.NUMBER;

      if (betweenObject.dataType === 'DATETIME') {
        value.start = (0, _convertions.zeroSinceSS)(value.start);
        value.end = (0, _convertions.zeroSinceSS)(value.end);
        dataType = _types.dataTypes.DATETIME;
      }
    } else if (type === _types.types.EQUAL_TO_SET || type === _types.types.CONTAINS_ANY_OF_SET || type === _types.types.CONTAINS_ALL_OF_SET || type === _types.types.PART_OF_SET) {
      value = (0, _set2.default)(whitelistObject);
      dataType = _types.dataTypes.SET;
    } else if (type === _types.types.STARTS_WITH || type === _types.types.ENDS_WITH || type === _types.types.CONTAINS_STRING) {
      value = (0, _set2.default)(whitelistObject);
    } else if (type === _types.types.IN_SPLIT_TREATMENT) {
      value = dependencyObject;
      dataType = _types.dataTypes.NOT_SPECIFIED;
    } else if (type === _types.types.EQUAL_TO_BOOLEAN) {
      dataType = _types.dataTypes.BOOLEAN;
      value = booleanMatcherData;
    } else if (type === _types.types.MATCHES_STRING) {
      value = stringMatcherData;
    }

    return {
      attribute: attribute, // attribute over we should do the matching, undefined means 'use the key'
      negate: negate, // should we negate the result?
      type: type, // which kind of matcher we should evaluate
      value: value, // metadata used for the matching
      dataType: dataType // runtime input data type
    };
  });

  if ((0, _lang.findIndex)(parsedMatchers, function (m) {
    return m.type === _types.types.UNDEFINED;
  }) === -1) {
    return parsedMatchers;
  } else {
    return [];
  }
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/

exports.default = transform;
module.exports = exports.default;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
/**
 * Extract segment name as a plain string.
 */
function transform() {
  var segment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return segment.segmentName;
}

exports.default = transform;
module.exports = exports.default;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(76);

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
function transform(whitelistObject) {
  return new _set2.default(whitelistObject.whitelist);
}

exports.default = transform;
module.exports = exports.default;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(22);
__webpack_require__(24);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
module.exports = __webpack_require__(2).Set;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(97);
var validate = __webpack_require__(69);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(101)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(102)('Set') });


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(103)('Set');


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(104)('Set');


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
function transform(whitelistObject) {
  return whitelistObject.whitelist;
}

exports.default = transform;
module.exports = exports.default;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
function transform(unaryNumericObject) {
  return unaryNumericObject.value;
}

exports.default = transform;
module.exports = exports.default;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lang = __webpack_require__(1);

function Treatments(ranges, treatments) {
  if (!(this instanceof Treatments)) {
    return new Treatments(ranges, treatments);
  }

  if (ranges[ranges.length - 1] !== 100) {
    throw new RangeError('Provided invalid dataset as input');
  }

  this._ranges = ranges;
  this._treatments = treatments;
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/

Treatments.parse = function parse(data) {
  var _data$reduce = data.reduce(function (accum, value) {
    var size = value.size,
        treatment = value.treatment;


    accum.ranges.push(accum.inc += size);
    accum.treatments.push(treatment);

    return accum;
  }, {
    inc: 0,
    ranges: [],
    treatments: []
  }),
      ranges = _data$reduce.ranges,
      treatments = _data$reduce.treatments;

  return new Treatments(ranges, treatments);
};

Treatments.prototype.getTreatmentFor = function getTreatmentFor(x) {
  if (x < 0 || x > 100) {
    throw new RangeError('Please provide a value between 0 and 100');
  }

  // Readme [1]
  // We need to manually add any dependency which escape of dummy resolution
  // I'll deal with this in a future release
  // for (let [k, r] of this._ranges.entries()) {
  //   if (x <= r) return this._treatments[k];
  // }

  var index = (0, _lang.findIndex)(this._ranges, function (range) {
    return x <= range;
  });
  var treatment = this._treatments[index];

  return treatment;
};

exports.default = Treatments;
module.exports = exports.default;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(75);

var _all = __webpack_require__(252);

var _all2 = _interopRequireDefault(_all);

var _segment = __webpack_require__(253);

var _segment2 = _interopRequireDefault(_segment);

var _whitelist = __webpack_require__(254);

var _whitelist2 = _interopRequireDefault(_whitelist);

var _eq = __webpack_require__(255);

var _eq2 = _interopRequireDefault(_eq);

var _gte = __webpack_require__(256);

var _gte2 = _interopRequireDefault(_gte);

var _lte = __webpack_require__(257);

var _lte2 = _interopRequireDefault(_lte);

var _between = __webpack_require__(258);

var _between2 = _interopRequireDefault(_between);

var _eq_set = __webpack_require__(259);

var _eq_set2 = _interopRequireDefault(_eq_set);

var _cont_all = __webpack_require__(260);

var _cont_all2 = _interopRequireDefault(_cont_all);

var _cont_any = __webpack_require__(261);

var _cont_any2 = _interopRequireDefault(_cont_any);

var _part_of = __webpack_require__(262);

var _part_of2 = _interopRequireDefault(_part_of);

var _sw = __webpack_require__(263);

var _sw2 = _interopRequireDefault(_sw);

var _ew = __webpack_require__(264);

var _ew2 = _interopRequireDefault(_ew);

var _cont_str = __webpack_require__(265);

var _cont_str2 = _interopRequireDefault(_cont_str);

var _dependency = __webpack_require__(266);

var _dependency2 = _interopRequireDefault(_dependency);

var _boolean = __webpack_require__(268);

var _boolean2 = _interopRequireDefault(_boolean);

var _string = __webpack_require__(269);

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Matcher factory.
 */
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
function MatcherFactory(matcherDto, storage) {
  var type = matcherDto.type,
      value = matcherDto.value;


  var matcherFn = void 0;

  if (type === _types.types.ALL) {
    matcherFn = (0, _all2.default)(value);
  } else if (type === _types.types.SEGMENT) {
    matcherFn = (0, _segment2.default)(value, storage);
  } else if (type === _types.types.WHITELIST) {
    matcherFn = (0, _whitelist2.default)(value);
  } else if (type === _types.types.EQUAL_TO) {
    matcherFn = (0, _eq2.default)(value);
  } else if (type === _types.types.GREATER_THAN_OR_EQUAL_TO) {
    matcherFn = (0, _gte2.default)(value);
  } else if (type === _types.types.LESS_THAN_OR_EQUAL_TO) {
    matcherFn = (0, _lte2.default)(value);
  } else if (type === _types.types.BETWEEN) {
    matcherFn = (0, _between2.default)(value);
  } else if (type === _types.types.EQUAL_TO_SET) {
    matcherFn = (0, _eq_set2.default)(value);
  } else if (type === _types.types.CONTAINS_ANY_OF_SET) {
    matcherFn = (0, _cont_any2.default)(value);
  } else if (type === _types.types.CONTAINS_ALL_OF_SET) {
    matcherFn = (0, _cont_all2.default)(value);
  } else if (type === _types.types.PART_OF_SET) {
    matcherFn = (0, _part_of2.default)(value);
  } else if (type === _types.types.STARTS_WITH) {
    matcherFn = (0, _sw2.default)(value);
  } else if (type === _types.types.ENDS_WITH) {
    matcherFn = (0, _ew2.default)(value);
  } else if (type === _types.types.CONTAINS_STRING) {
    matcherFn = (0, _cont_str2.default)(value);
  } else if (type === _types.types.IN_SPLIT_TREATMENT) {
    matcherFn = (0, _dependency2.default)(value, storage);
  } else if (type === _types.types.EQUAL_TO_BOOLEAN) {
    matcherFn = (0, _boolean2.default)(value);
  } else if (type === _types.types.MATCHES_STRING) {
    matcherFn = (0, _string2.default)(value);
  }

  return matcherFn;
}

exports.default = MatcherFactory;
module.exports = exports.default;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/


function allMatcher(runtimeAttr /*: string */) /*: boolean */{
  log.debug('[allMatcher] is always true');

  return runtimeAttr != null;
}

function allMatcherContext() {
  return allMatcher;
}

exports.default = allMatcherContext;
module.exports = exports.default;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/


function matcherSegmentContext(segmentName, storage) {

  function segmentMatcher(key) {
    var isInSegment = storage.segments.isInSegment(segmentName, key);

    if ((0, _thenable2.default)(isInSegment)) {
      isInSegment.then(function (result) {
        log.debug('[asyncSegmentMatcher] evaluated ' + segmentName + ' / ' + key + ' => ' + isInSegment);

        return result;
      });
    } else {
      log.debug('[segmentMatcher] evaluated ' + segmentName + ' / ' + key + ' => ' + isInSegment);
    }

    return isInSegment;
  }

  return segmentMatcher;
}

exports.default = matcherSegmentContext;
module.exports = exports.default;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(49);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/


function whitelistMatcherContext(ruleAttr /*: Set */) /*: Function */{
  return function whitelistMatcher(runtimeAttr /*: string */) /*: boolean */{
    var isInWhitelist = ruleAttr.has(runtimeAttr);

    log.debug('[whitelistMatcher] evaluated ' + runtimeAttr + ' in [' + [].concat((0, _toConsumableArray3.default)(ruleAttr)).join(',') + '] => ' + isInWhitelist);

    return isInWhitelist;
  };
}

exports.default = whitelistMatcherContext;
module.exports = exports.default;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/

function equalToMatcherContext(ruleAttr /*: number */) /*: Function */{
  return function equalToMatcher(runtimeAttr /*: number */) /*: boolean */{
    var isEqual = runtimeAttr === ruleAttr;

    log.debug('[equalToMatcher] is ' + runtimeAttr + ' equal to ' + ruleAttr + '? ' + isEqual);

    return isEqual;
  };
}

exports.default = equalToMatcherContext;
module.exports = exports.default;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/

function greaterThanEqualMatcherContext(ruleAttr /*: number */) /*: Function */{
  return function greaterThanEqualMatcher(runtimeAttr /*: number */) /*: boolean */{
    var isGreaterEqualThan = runtimeAttr >= ruleAttr;

    log.debug('[greaterThanEqualMatcher] is ' + runtimeAttr + ' greater than ' + ruleAttr + '? ' + isGreaterEqualThan);

    return isGreaterEqualThan;
  };
}

exports.default = greaterThanEqualMatcherContext;
module.exports = exports.default;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/

function lessThanEqualMatcherContext(ruleAttr /*: number */) /*: function */{
  return function lessThanEqualMatcher(runtimeAttr /*: number */) /*: boolean */{
    var isLessEqualThan = runtimeAttr <= ruleAttr;

    log.debug('[lessThanEqualMatcher] is ' + runtimeAttr + ' less than ' + ruleAttr + '? ' + isLessEqualThan);

    return isLessEqualThan;
  };
}

exports.default = lessThanEqualMatcherContext;
module.exports = exports.default;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/


function betweenMatcherContext(ruleVO /*: betweenObject */) /*: Function */{
  return function betweenMatcher(runtimeAttr /*: number */) /*: boolean */{

    var isBetween = runtimeAttr >= ruleVO.start && runtimeAttr <= ruleVO.end;

    log.debug('[betweenMatcher] is ' + runtimeAttr + ' between ' + ruleVO.start + ' and ' + ruleVO.end + '? ' + isBetween);

    return isBetween;
  };
}

exports.default = betweenMatcherContext;
module.exports = exports.default;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/

function equalToSetMatcherContext(ruleAttr /*: array */) /*: Function */{
  return function equalToSetMatcher(runtimeAttr /*: array */) /*: boolean */{
    // Length being the same is the first condition.
    var isEqual = runtimeAttr.length === ruleAttr.length;

    var _loop = function _loop(i) {
      // if length is the same we check that all elements are present in the other collection.
      if ((0, _lang.findIndex)(ruleAttr, function (e) {
        return e === runtimeAttr[i];
      }) < 0) isEqual = false;
    };

    for (var i = 0; i < runtimeAttr.length && isEqual; i++) {
      _loop(i);
    }

    log.debug('[equalToSetMatcher] is ' + runtimeAttr + ' equal to set ' + ruleAttr + '? ' + isEqual);

    return isEqual;
  };
}

exports.default = equalToSetMatcherContext;
module.exports = exports.default;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/

function containsAllMatcherContext(ruleAttr /*: array */) /*: Function */{
  return function containsAllMatcher(runtimeAttr /*: array */) /*: boolean */{
    var containsAll = true;

    if (runtimeAttr.length < ruleAttr.length) {
      containsAll = false;
    } else {
      var _loop = function _loop(i) {
        if ((0, _lang.findIndex)(runtimeAttr, function (e) {
          return e === ruleAttr[i];
        }) < 0) containsAll = false;
      };

      for (var i = 0; i < ruleAttr.length && containsAll; i++) {
        _loop(i);
      }
    }

    log.debug('[containsAllMatcher] ' + runtimeAttr + ' contains all elements of ' + ruleAttr + '? ' + containsAll);

    return containsAll;
  };
}

exports.default = containsAllMatcherContext;
module.exports = exports.default;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/

function containsAnyMatcherContext(ruleAttr /*: array */) /*: Function */{
  return function containsAnyMatcher(runtimeAttr /*: array */) /*: boolean */{
    var containsAny = false;

    var _loop = function _loop(i) {
      if ((0, _lang.findIndex)(runtimeAttr, function (e) {
        return e === ruleAttr[i];
      }) >= 0) containsAny = true;
    };

    for (var i = 0; i < ruleAttr.length && !containsAny; i++) {
      _loop(i);
    }

    log.debug('[containsAnyMatcher] ' + runtimeAttr + ' contains at least an element of ' + ruleAttr + '? ' + containsAny);

    return containsAny;
  };
}

exports.default = containsAnyMatcherContext;
module.exports = exports.default;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var log = (0, _logger2.default)('splitio-engine:matcher');

function partOfMatcherContext(ruleAttr /*: array */) /*: Function */{
  return function partOfMatcher(runtimeAttr /*: array */) /*: boolean */{
    // To be part of the length should be minor or equal.
    var isPartOf = runtimeAttr.length <= ruleAttr.length;

    var _loop = function _loop(i) {
      // If the length says is possible, we iterate until we prove otherwise or we check all elements.
      if ((0, _lang.findIndex)(ruleAttr, function (e) {
        return e === runtimeAttr[i];
      }) < 0) isPartOf = false;
    };

    for (var i = 0; i < runtimeAttr.length && isPartOf; i++) {
      _loop(i);
    }

    log.debug('[partOfMatcher] ' + runtimeAttr + ' is part of ' + ruleAttr + '? ' + isPartOf);

    return isPartOf;
  };
}

exports.default = partOfMatcherContext;
module.exports = exports.default;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/

function startsWithMatcherContext(ruleAttr /*: array */) /*: Function */{
  return function startsWithMatcher(runtimeAttr /*: string */) /*: boolean */{
    var matches = ruleAttr.some(function (e) {
      return (0, _lang.startsWith)(runtimeAttr, e);
    });

    log.debug('[startsWithMatcher] ' + runtimeAttr + ' starts with ' + ruleAttr + '? ' + matches);

    return matches;
  };
}

exports.default = startsWithMatcherContext;
module.exports = exports.default;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _lang = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/

function endsWithMatcherContext(ruleAttr /*: array */) /*: Function */{
  return function endsWithMatcher(runtimeAttr /*: string */) /*: boolean */{
    var endsWith = ruleAttr.some(function (e) {
      return (0, _lang.endsWith)(runtimeAttr, e);
    });

    log.debug('[endsWithMatcher] ' + runtimeAttr + ' ends with ' + ruleAttr + '? ' + endsWith);

    return endsWith;
  };
}

exports.default = endsWithMatcherContext;
module.exports = exports.default;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var log = (0, _logger2.default)('splitio-engine:matcher');

function containsStringMatcherContext(ruleAttr /*: array */) /*: Function */{
  return function containsStringMatcher(runtimeAttr /*: string */) /*: boolean */{
    var contains = ruleAttr.some(function (e) {
      return (0, _lang.isString)(runtimeAttr) && runtimeAttr.indexOf(e) > -1;
    });

    log.debug('[containsStringMatcher] ' + runtimeAttr + ' contains ' + ruleAttr + '? ' + contains);

    return contains;
  };
}

exports.default = containsStringMatcherContext;
module.exports = exports.default;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(28);

var _stringify2 = _interopRequireDefault(_stringify);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/


function checkTreatment(evaluation, acceptableTreatments, parentName) {
  var matches = false;

  if (Array.isArray(acceptableTreatments)) {
    matches = acceptableTreatments.indexOf(evaluation.treatment) !== -1;
  }

  log.debug('[dependencyMatcher] Parent split "' + parentName + '" evaluated to "' + evaluation.treatment + '" with label "' + evaluation.label + '". ' + parentName + ' evaluated treatment is part of [' + acceptableTreatments + '] ? ' + matches + '.');

  return matches;
}

function dependencyMatcherContext(_ref, storage) {
  var split = _ref.split,
      treatments = _ref.treatments;


  return function dependencyMatcher(_ref2, splitEvaluator) {
    var key = _ref2.key,
        attributes = _ref2.attributes;

    log.debug('[dependencyMatcher] will evaluate parent split: "' + split + '" with key: ' + (0, _stringify2.default)(key) + ' ' + (attributes ? '\n attributes: ' + (0, _stringify2.default)(attributes) : ''));
    var evaluation = splitEvaluator(key, split, attributes, storage);

    if ((0, _thenable2.default)(evaluation)) {
      return evaluation.then(function (ev) {
        return checkTreatment(ev, treatments, split);
      });
    } else {
      return checkTreatment(evaluation, treatments, split);
    }
  };
}

exports.default = dependencyMatcherContext;
module.exports = exports.default;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/


function booleanMatcherContext(ruleAttr /*: bool */) /*: Function */{
  return function booleanMatcher(runtimeAttr /*: bool */) /*: bool */{
    var booleanMatches = ruleAttr === runtimeAttr;

    log.debug('[booleanMatcher] ' + ruleAttr + ' === ' + runtimeAttr);

    return booleanMatches;
  };
}

exports.default = booleanMatcherContext;
module.exports = exports.default;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:matcher'); /**
                                                           Copyright 2016 Split Software

                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                           you may not use this file except in compliance with the License.
                                                           You may obtain a copy of the License at

                                                               http://www.apache.org/licenses/LICENSE-2.0

                                                           Unless required by applicable law or agreed to in writing, software
                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                           See the License for the specific language governing permissions and
                                                           limitations under the License.
                                                           **/


function stringMatcherContext(ruleAttr /*: regex */) /*: Function */{
  return function stringMatcher(runtimeAttr /*: string */) /*: bool */{
    var re = void 0;

    try {
      re = new RegExp(ruleAttr);
    } catch (e) {
      log.debug('[stringMatcher] ' + ruleAttr + ' is an invalid regex');

      return false;
    }

    var regexMatches = re.test(runtimeAttr);

    log.debug('[stringMatcher] does ' + runtimeAttr + ' matches with ' + ruleAttr + '? ' + (regexMatches ? 'yes' : 'no'));

    return regexMatches;
  };
}

exports.default = stringMatcherContext;
module.exports = exports.default;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _sanitize = __webpack_require__(271);

var _sanitize2 = _interopRequireDefault(_sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:value'); /**
                                                         Copyright 2016 Split Software

                                                         Licensed under the Apache License, Version 2.0 (the "License");
                                                         you may not use this file except in compliance with the License.
                                                         You may obtain a copy of the License at

                                                             http://www.apache.org/licenses/LICENSE-2.0

                                                         Unless required by applicable law or agreed to in writing, software
                                                         distributed under the License is distributed on an "AS IS" BASIS,
                                                         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                         See the License for the specific language governing permissions and
                                                         limitations under the License.
                                                         **/

function parseValue(key, attributeName, attributes) {
  var value = undefined;
  if (attributeName) {
    if (attributes) {
      value = attributes[attributeName];
      log.debug('Extracted attribute [' + attributeName + '], [' + value + '] will be used for matching.');
    } else {
      log.warn('Defined attribute [' + attributeName + '], no attributes received.');
    }
  } else {
    value = key;
  }

  return value;
}

/**
 * Defines value to be matched (key / attribute).
 */
function value(key, matcherDto, attributes) {
  var attributeName = matcherDto.attribute;
  var valueToMatch = parseValue(key, attributeName, attributes);
  var sanitizedValue = (0, _sanitize2.default)(matcherDto.type, valueToMatch, matcherDto.dataType, attributes);

  if (sanitizedValue !== undefined) {
    return sanitizedValue;
  } else {
    log.warn('Value ' + valueToMatch + ' ' + (attributeName ? 'for attribute ' + attributeName + ' ' : +'') + 'doesn\'t match with expected type.');
    return;
  }
}

exports.default = value;
module.exports = exports.default;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(28);

var _stringify2 = _interopRequireDefault(_stringify);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _lang = __webpack_require__(1);

var _convertions = __webpack_require__(116);

var _types = __webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine:sanitize'); /**
                                                            Copyright 2016 Split Software

                                                            Licensed under the Apache License, Version 2.0 (the "License");
                                                            you may not use this file except in compliance with the License.
                                                            You may obtain a copy of the License at

                                                                http://www.apache.org/licenses/LICENSE-2.0

                                                            Unless required by applicable law or agreed to in writing, software
                                                            distributed under the License is distributed on an "AS IS" BASIS,
                                                            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                            See the License for the specific language governing permissions and
                                                            limitations under the License.
                                                            **/

var MATCHERS = _types.types;
var DATA_TYPES = _types.dataTypes;

function sanitizeNumber(val) {
  var num = (0, _lang.toNumber)(val);
  return isNaN(num) ? undefined : num;
}

function sanitizeString(val) {
  var valueToSanitize = val;

  if ((0, _lang.isObject)(val)) {
    // If the value is an object and is not a key, discard it.
    valueToSanitize = val.matchingKey ? val.matchingKey : undefined;
  }

  var str = (0, _lang.toString)(valueToSanitize);
  return str ? str : undefined;
}

function sanitizeArray(val) {
  var arr = Array.isArray(val) ? (0, _lang.uniq)(val.map(function (e) {
    return e + '';
  })) : [];
  return arr.length ? arr : undefined;
}

function sanitizeBoolean(val) {
  if (val === true || val === false) return val;

  if (typeof val === 'string') {
    var lowerCaseValue = val.toLocaleLowerCase();

    if (lowerCaseValue === 'true') return true;
    if (lowerCaseValue === 'false') return false;
  }

  return undefined;
}

function dependencyProcessor(sanitizedValue, attributes) {
  return {
    key: sanitizedValue,
    attributes: attributes
  };
}

/**
 * We can define a pre-processing for the value, to be executed prior to matcher evaluation.
 */
function getProcessingFunction(matcherTypeID, dataType) {
  switch (matcherTypeID) {
    case MATCHERS.EQUAL_TO:
      return dataType === 'DATETIME' ? _convertions.zeroSinceHH : undefined;
    case MATCHERS.GREATER_THAN_OR_EQUAL_TO:
    case MATCHERS.LESS_THAN_OR_EQUAL_TO:
    case MATCHERS.BETWEEN:
      return dataType === 'DATETIME' ? _convertions.zeroSinceSS : undefined;
    case MATCHERS.IN_SPLIT_TREATMENT:
      return dependencyProcessor;
    default:
      return undefined;
  }
}

function sanitizeValue(matcherTypeID, value, dataType, attributes) {
  var processor = getProcessingFunction(matcherTypeID, dataType);
  var sanitizedValue = void 0;

  switch (dataType) {
    case DATA_TYPES.NUMBER:
    case DATA_TYPES.DATETIME:
      sanitizedValue = sanitizeNumber(value);
      break;
    case DATA_TYPES.STRING:
      sanitizedValue = sanitizeString(value);
      break;
    case DATA_TYPES.SET:
      sanitizedValue = sanitizeArray(value);
      break;
    case DATA_TYPES.BOOLEAN:
      sanitizedValue = sanitizeBoolean(value);
      break;
    case DATA_TYPES.NOT_SPECIFIED:
      sanitizedValue = value;
      break;
    default:
      sanitizedValue = undefined;
  }

  if (processor) {
    sanitizedValue = processor(sanitizedValue, attributes);
  }

  log.debug('Attempted to sanitize [' + value + '] which should be of type [' + dataType + ']. \n Sanitized and processed value => [' + (sanitizedValue instanceof Object ? (0, _stringify2.default)(sanitizedValue) : sanitizedValue) + ']');

  return sanitizedValue;
}

exports.default = sanitizeValue;
module.exports = exports.default;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _engine = __webpack_require__(273);

var _engine2 = _interopRequireDefault(_engine);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

var _labels = __webpack_require__(52);

var _labels2 = _interopRequireDefault(_labels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Build Evaluation object if and only if matchingResult is true
function match(matchingResult, bucketingKey, seed, treatments, label, algo) {
  if (matchingResult) {
    var treatment = _engine2.default.getTreatment(bucketingKey, seed, treatments, algo);

    return {
      treatment: treatment,
      label: label
    };
  }

  // else we should notify the engine to continue evaluating
  return undefined;
}

// Condition factory
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function conditionContext(matcherEvaluator, treatments, label, conditionType) {

  function conditionEvaluator(key, seed, trafficAllocation, trafficAllocationSeed, splitEvaluator, attributes, algo) {

    // Whitelisting has more priority than traffic allocation, so we don't apply this filtering to those conditions.
    if (conditionType === 'ROLLOUT' && !_engine2.default.shouldApplyRollout(trafficAllocation, key.bucketingKey, trafficAllocationSeed, algo)) {
      return {
        treatment: undefined,
        label: _labels2.default.NOT_IN_SPLIT
      };
    }

    // matcherEvaluator could be Async, this relays on matchers return value, so we need
    // to verify for thenable before play with the result.
    // Also, we pass splitEvaluator function in case we have a matcher that needs to evaluate another split,
    // as well as the entire key object for the same reason.
    var matches = matcherEvaluator(key, attributes, splitEvaluator);

    if ((0, _thenable2.default)(matches)) {
      return matches.then(function (result) {
        return match(result, key.bucketingKey, seed, treatments, label, algo);
      });
    }

    return match(matches, key.bucketingKey, seed, treatments, label, algo);
  }

  return conditionEvaluator;
}

exports.default = conditionContext;
module.exports = exports.default;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _legacy = __webpack_require__(274);

var _legacy2 = _interopRequireDefault(_legacy);

var _murmur = __webpack_require__(275);

var _murmur2 = _interopRequireDefault(_murmur);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-engine'); /**
                                                   Copyright 2016 Split Software

                                                   Licensed under the Apache License, Version 2.0 (the "License");
                                                   you may not use this file except in compliance with the License.
                                                   You may obtain a copy of the License at

                                                       http://www.apache.org/licenses/LICENSE-2.0

                                                   Unless required by applicable law or agreed to in writing, software
                                                   distributed under the License is distributed on an "AS IS" BASIS,
                                                   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                   See the License for the specific language governing permissions and
                                                   limitations under the License.
                                                   **/

var MURMUR_ID = 2;

/**
 * Returns the bucket function by algoId.
 */
function getBucketAlgo(algoId) {
  if (algoId === MURMUR_ID) {
    return _murmur2.default.bucket;
  } else {
    return _legacy2.default.bucket;
  }
}

var engine = {
  /**
   * Get the treatment name given a key, a seed, and the percentage of each treatment.
   */
  getTreatment: function getTreatment(key, seed, treatments, algoId) {
    var bucket = getBucketAlgo(algoId)(key, seed);

    var treatment = treatments.getTreatmentFor(bucket);

    log.debug('[engine] using algo ' + (algoId !== MURMUR_ID ? 'legacy' : 'murmur') + ' bucket ' + bucket + ' for key ' + key + ' using seed ' + seed + ' - treatment ' + treatment);

    return treatment;
  },

  /**
   * Evaluates the traffic allocation to see if we should apply rollout conditions or not.
   */
  shouldApplyRollout: function shouldApplyRollout(trafficAllocation, key, trafficAllocationSeed, algoId) {
    // For rollout, if traffic allocation for splits is 100%, we don't need to filter it because everything should evaluate the rollout.
    if (trafficAllocation < 100) {
      var bucket = getBucketAlgo(algoId)(key, trafficAllocationSeed);

      if (bucket > trafficAllocation) {
        return false;
      }
    }
    return true;
  }
};

exports.default = engine;
module.exports = exports.default;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
//
// JAVA reference implementation for the hashing function.
//
// int h = 0;
// for (int i = 0; i < key.length(); i++) {
//     h = 31 * h + key.charAt(i);
// }
// return h ^ seed; // XOR the hash and seed
//

function ToInteger(x) {
  x = Number(x);
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}

function modulo(a, b) {
  return a - Math.floor(a / b) * b;
}

function ToUint32(x) {
  return modulo(ToInteger(x), Math.pow(2, 32));
}

function ToInt32(x) {
  var uint32 = ToUint32(x);

  if (uint32 >= Math.pow(2, 31)) {
    return uint32 - Math.pow(2, 32);
  } else {
    return uint32;
  }
}

function hash(str /*: string */, seed /*: number */) /*: number */{
  var h = 0;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(str), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var c = _step.value;

      h = ToInt32(ToInt32(31 * h) + c.charCodeAt(0));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ToInt32(h ^ seed);
}

function bucket(str /*: string */, seed /*: number */) /*: number */{
  return Math.abs(hash(str, seed) % 100) + 1;
}

exports.default = {
  hash: hash,
  bucket: bucket
};
module.exports = exports.default;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utfx = __webpack_require__(276);

var _utfx2 = _interopRequireDefault(_utfx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringSource = _utfx2.default.stringSource; /* eslint-disable no-fallthrough */

var stringDestination = _utfx2.default.stringDestination;
var encodeUTF16toUTF8 = _utfx2.default.encodeUTF16toUTF8;

function UTF16ToUTF8(key) {
  var sd = void 0;

  encodeUTF16toUTF8(stringSource(key), sd = stringDestination());

  return sd();
}

// +----------------------------------------------------------------------+
// | murmurHash3.js v2.1.2 (http://github.com/karanlyons/murmurHash.js)   |
// | A javascript implementation of MurmurHash3's x86 hashing algorithms. |
// |----------------------------------------------------------------------|
// | Copyright (c) 2012 Karan Lyons                                       |
// | Freely distributable under the MIT license.                          |
// +----------------------------------------------------------------------+

// PRIVATE FUNCTIONS
// -----------------
function _x86Multiply(m, n) {
  //
  // Given two 32bit ints, returns the two multiplied together as a
  // 32bit int.
  //

  return (m & 0xffff) * n + (((m >>> 16) * n & 0xffff) << 16);
}

function _x86Rotl(m, n) {
  //
  // Given a 32bit int and an int representing a number of bit positions,
  // returns the 32bit int rotated left by that number of positions.
  //

  return m << n | m >>> 32 - n;
}

function _x86Fmix(h) {
  //
  // Given a block, returns murmurHash3's final x86 mix of that block.
  //

  h ^= h >>> 16;
  h = _x86Multiply(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = _x86Multiply(h, 0xc2b2ae35);
  h ^= h >>> 16;

  return h;
}

// PUBLIC FUNCTIONS
// ----------------
function hash32(key, seed) {
  //
  // Given a string and an optional seed as an int, returns a 32 bit hash
  // using the x86 flavor of MurmurHash3, as an unsigned int.
  //

  key = key || '';
  seed = seed || 0;

  var remainder = key.length % 4;
  var bytes = key.length - remainder;

  var h1 = seed;

  var k1 = 0;

  var c1 = 0xcc9e2d51;
  var c2 = 0x1b873593;

  for (var i = 0; i < bytes; i = i + 4) {
    k1 = key.charCodeAt(i) & 0xff | (key.charCodeAt(i + 1) & 0xff) << 8 | (key.charCodeAt(i + 2) & 0xff) << 16 | (key.charCodeAt(i + 3) & 0xff) << 24;

    k1 = _x86Multiply(k1, c1);
    k1 = _x86Rotl(k1, 15);
    k1 = _x86Multiply(k1, c2);

    h1 ^= k1;
    h1 = _x86Rotl(h1, 13);
    h1 = _x86Multiply(h1, 5) + 0xe6546b64;
  }

  k1 = 0;

  switch (remainder) {
    case 3:
      k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      k1 ^= key.charCodeAt(i) & 0xff;
      k1 = _x86Multiply(k1, c1);
      k1 = _x86Rotl(k1, 15);
      k1 = _x86Multiply(k1, c2);
      h1 ^= k1;
  }

  h1 ^= key.length;
  h1 = _x86Fmix(h1);

  return h1 >>> 0;
}

function hash(str /*: string */, seed /*: number */) /*: number */{
  return hash32(UTF16ToUTF8(str), seed >>> 0);
}

function bucket(str /*: string */, seed /*: number */) /*: number */{
  return Math.abs(hash(str, seed) % 100) + 1;
}

exports.default = {
  hash: hash,
  bucket: bucket
};
module.exports = exports.default;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

/*
 Copyright 2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

module.exports = __webpack_require__(277);


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Copyright 2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @license utfx (c) 2014 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/utfx for details
 */
(function(global, factory) {

    /* AMD */ if (true)
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /* CommonJS */ else if (typeof require === "function" && typeof module === 'object' && module && module['exports'])
        module['exports'] = factory();
    /* Global */ else
        (global["dcodeIO"] = global["dcodeIO"] || {})["utfx"] = factory();

})(this, function() {
    "use strict";

    if (!Array.isArray)
        Array.isArray = function (v) {
            return Object.prototype.toString.call(v) === "[object Array]";
        };

    /**
     * utfx namespace.
     * @exports utfx
     * @type {!Object.<string,*>}
     */
    var utfx = {};

    /**
     * Maximum valid code point.
     * @type {number}
     * @const
     * @expose
     */
    utfx.MAX_CODEPOINT = 0x10FFFF;

    /**
     * Encodes UTF8 code points to UTF8 bytes.
     * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
     *  respectively `null` if there are no more code points left or a single numeric code point.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte
     * @expose
     */
    utfx.encodeUTF8 = function(src, dst) {
        var cp = null;
        if (typeof src === 'number')
            cp = src,
            src = function() { return null; };
        while (cp !== null || (cp = src()) !== null) {
            if (cp < 0x80)
                dst(cp&0x7F);
            else if (cp < 0x800)
                dst(((cp>>6)&0x1F)|0xC0),
                dst((cp&0x3F)|0x80);
            else if (cp < 0x10000)
                dst(((cp>>12)&0x0F)|0xE0),
                dst(((cp>>6)&0x3F)|0x80),
                dst((cp&0x3F)|0x80);
            else
                dst(((cp>>18)&0x07)|0xF0),
                dst(((cp>>12)&0x3F)|0x80),
                dst(((cp>>6)&0x3F)|0x80),
                dst((cp&0x3F)|0x80);
            cp = null;
        }
    };

    /**
     * Decodes UTF8 bytes to UTF8 code points.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
     *  are no more bytes left.
     * @param {!function(number)} dst Code points destination as a function successively called with each decoded code point.
     * @throws {RangeError} If a starting byte is invalid in UTF8
     * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the
     *  remaining bytes.
     * @expose
     */
    utfx.decodeUTF8 = function(src, dst) {
        var a, b, c, d, fail = function(b) {
            b = b.slice(0, b.indexOf(null));
            var err = Error(b.toString());
            err.name = "TruncatedError";
            err['bytes'] = b;
            throw err;
        };
        while ((a = src()) !== null) {
            if ((a&0x80) === 0)
                dst(a);
            else if ((a&0xE0) === 0xC0)
                ((b = src()) === null) && fail([a, b]),
                dst(((a&0x1F)<<6) | (b&0x3F));
            else if ((a&0xF0) === 0xE0)
                ((b=src()) === null || (c=src()) === null) && fail([a, b, c]),
                dst(((a&0x0F)<<12) | ((b&0x3F)<<6) | (c&0x3F));
            else if ((a&0xF8) === 0xF0)
                ((b=src()) === null || (c=src()) === null || (d=src()) === null) && fail([a, b, c ,d]),
                dst(((a&0x07)<<18) | ((b&0x3F)<<12) | ((c&0x3F)<<6) | (d&0x3F));
            else throw RangeError("Illegal starting byte: "+a);
        }
    };

    /**
     * Converts UTF16 characters to UTF8 code points.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @param {!function(number)} dst Code points destination as a function successively called with each converted code
     *  point.
     * @expose
     */
    utfx.UTF16toUTF8 = function(src, dst) {
        var c1, c2 = null;
        while (true) {
            if ((c1 = c2 !== null ? c2 : src()) === null)
                break;
            if (c1 >= 0xD800 && c1 <= 0xDFFF) {
                if ((c2 = src()) !== null) {
                    if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
                        dst((c1-0xD800)*0x400+c2-0xDC00+0x10000);
                        c2 = null; continue;
                    }
                }
            }
            dst(c1);
        }
        if (c2 !== null) dst(c2);
    };

    /**
     * Converts UTF8 code points to UTF16 characters.
     * @param {(!function():number|null) | number} src Code points source, either as a function returning the next code point
     *  respectively `null` if there are no more code points left or a single numeric code point.
     * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
     * @throws {RangeError} If a code point is out of range
     * @expose
     */
    utfx.UTF8toUTF16 = function(src, dst) {
        var cp = null;
        if (typeof src === 'number')
            cp = src, src = function() { return null; };
        while (cp !== null || (cp = src()) !== null) {
            if (cp <= 0xFFFF)
                dst(cp);
            else
                cp -= 0x10000,
                dst((cp>>10)+0xD800),
                dst((cp%0x400)+0xDC00);
            cp = null;
        }
    };

    /**
     * Converts and encodes UTF16 characters to UTF8 bytes.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively `null`
     *  if there are no more characters left.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
     * @expose
     */
    utfx.encodeUTF16toUTF8 = function(src, dst) {
        utfx.UTF16toUTF8(src, function(cp) {
            utfx.encodeUTF8(cp, dst);
        });
    };

    /**
     * Decodes and converts UTF8 bytes to UTF16 characters.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if there
     *  are no more bytes left.
     * @param {!function(number)} dst Characters destination as a function successively called with each converted char code.
     * @throws {RangeError} If a starting byte is invalid in UTF8
     * @throws {Error} If the last sequence is truncated. Has an array property `bytes` holding the remaining bytes.
     * @expose
     */
    utfx.decodeUTF8toUTF16 = function(src, dst) {
        utfx.decodeUTF8(src, function(cp) {
            utfx.UTF8toUTF16(cp, dst);
        });
    };

    /**
     * Calculates the byte length of an UTF8 code point.
     * @param {number} cp UTF8 code point
     * @returns {number} Byte length
     * @expose
     */
    utfx.calculateCodePoint = function(cp) {
        return (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
    };

    /**
     * Calculates the number of UTF8 bytes required to store UTF8 code points.
     * @param {(!function():number|null)} src Code points source as a function returning the next code point respectively
     *  `null` if there are no more code points left.
     * @returns {number} The number of UTF8 bytes required
     * @expose
     */
    utfx.calculateUTF8 = function(src) {
        var cp, l=0;
        while ((cp = src()) !== null)
            l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
        return l;
    };

    /**
     * Calculates the number of UTF8 code points respectively UTF8 bytes required to store UTF16 char codes.
     * @param {(!function():number|null)} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @returns {!Array.<number>} The number of UTF8 code points at index 0 and the number of UTF8 bytes required at index 1.
     * @expose
     */
    utfx.calculateUTF16asUTF8 = function(src) {
        var n=0, l=0;
        utfx.UTF16toUTF8(src, function(cp) {
            ++n; l += (cp < 0x80) ? 1 : (cp < 0x800) ? 2 : (cp < 0x10000) ? 3 : 4;
        });
        return [n,l];
    };

    /**
     * String.fromCharCode reference for compile time renaming.
     * @type {!function(...[number]):string}
     * @inner
     */
    var stringFromCharCode = String.fromCharCode;

    /**
     * Creates a source function for an array.
     * @param {!Array.<number>} a Array to read from
     * @returns {!function():number|null} Source function returning the next value respectively `null` if there are no
     *  more values left.
     * @throws {TypeError} If the argument is invalid
     * @expose
     */
    utfx.arraySource = function(a) {
        if (!Array.isArray(a))
            throw TypeError("Illegal argument: "+(typeof a));
        var i=0; return function() {
            return i >= a.length ? null : a[i++];
        };
    };

    /**
     * Creates a destination function for an array.
     * @param {!Array.<number>} a Array to write to
     * @returns {!function(number)} Destination function successively called with the next value.
     * @throws {TypeError} If the argument is invalid
     * @expose
     */
    utfx.arrayDestination = function(a) {
        if (!Array.isArray(a))
            throw TypeError("Illegal argument: "+(typeof a));
        return Array.prototype.push.bind(a);
    };

    /**
     * Creates a source function for a string.
     * @param {string} s String to read from
     * @returns {!function():number|null} Source function returning the next char code respectively `null` if there are
     *  no more characters left.
     * @throws {TypeError} If the argument is invalid
     * @expose
     */
    utfx.stringSource = function(s) {
        if (typeof s !== 'string')
            throw TypeError("Illegal argument: "+(typeof s));
        var i=0; return function() {
            return i >= s.length ? null : s.charCodeAt(i++);
        };
    };

    /**
     * Creates a destination function for a string.
     * @returns {function(number=):undefined|string} Destination function successively called with the next char code.
     *  Returns the final string when called without arguments.
     * @expose
     */
    utfx.stringDestination = function() {
        var cs = [], ps = []; return function() {
            if (arguments.length === 0)
                return ps.join('')+stringFromCharCode.apply(String, cs);
            if (cs.length + arguments.length > 1024)
                ps.push(stringFromCharCode.apply(String, cs)),
                    cs.length = 0;
            Array.prototype.push.apply(cs, arguments);
        };
    };

    /**
     * Asserts an UTF16 char code.
     * @param {number} c UTF16 char code
     * @returns {number} Valid char code
     * @throws {TypeError} If the char code is invalid
     * @throws {RangeError} If the char code is out of range
     * @expose
     */
    utfx.assertCharCode = function(c) {
        if (typeof c !== 'number' || c !== c)
            throw TypeError("Illegal char code: "+(typeof c));
        if (c < 0 || c > 0xFFFF)
            throw RangeError("Illegal char code: "+c);
        return c;
    };

    /**
     * Asserts an UTF8 code point.
     * @param {number} cp UTF8 code point
     * @returns {number} Valid code point
     * @throws {TypeError} If the code point is invalid
     * @throws {RangeError} If the code point is out of range
     * @expose
     */
    utfx.assertCodePoint = function(cp) {
        if (typeof cp !== 'number' || cp !== cp)
            throw TypeError("Illegal code point: "+(typeof cp));
        if (cp < 0 || cp > utfx.MAX_CODEPOINT)
            throw RangeError("Illegal code point: "+cp);
        return cp;
    };

    /**
     * A polyfill for `String.fromCodePoint`.
     * @param {...number} var_args Code points
     * @returns {string} JavaScript string
     * @throws {TypeError} If arguments are invalid or a code point is invalid
     * @throws {RangeError} If a code point is out of range
     * @expose
     */
    utfx.fromCodePoint = function(var_args) {
        var sd, i=0, cps=arguments, k=cps.length;
        utfx.UTF8toUTF16(function() {
            return i < k ? utfx.assertCodePoint(cps[i++]) : null;
        }, sd = utfx.stringDestination());
        return sd();
    };

    /**
     * A polyfill for `String#codePointAt`.
     * @param {string} s JavaScript string
     * @param {number} i Index
     * @returns {number|undefined} Code point or `undefined` if `i` is out of range
     * @throws {TypeError} If arguments are invalid
     * @expose
     */
    utfx.codePointAt = function(s, i) {
        if ((typeof s !== 'string' && !(s && s instanceof String)) || typeof i !== 'number')
            throw TypeError("Illegal arguments: "+(typeof s)+", "+(typeof i));
        var k, cp;
        if (i < 0 || i >= (k=s.length))
            return;
        utfx.UTF16toUTF8(function() {
            return typeof cp === 'undefined' && i < k ? s.charCodeAt(i++) : null;
        }, function(icp) {
            cp = icp;
        });
        return cp;
    };

    /**
     * Installs utfx as a polyfill for `String.fromCodePoint` and `String#codePointAt` if not implemented.
     * @param {boolean=} override Overrides an existing implementation if `true`, defaults to `false`
     * @returns {!Object.<string,*>} utfx namespace
     * @expose
     */
    utfx.polyfill = function(override) {
        if (!String['fromCodePoint'] || override)
            String['fromCodePoint'] = utfx.fromCodePoint;
        if (!String.prototype['codePointAt'] || override)
            String.prototype['codePointAt'] = function(i) { return utfx.codePointAt(this, i); };
        return utfx;
    };

    return utfx;

});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

var _labels = __webpack_require__(52);

var _labels2 = _interopRequireDefault(_labels);

var _constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var log = (0, _logger2.default)('splitio-engine:combiner');


function unexpectedInputHandler() {
  log.error('Invalid Split provided, no valid conditions found');

  return {
    treatment: _constants.CONTROL,
    label: _labels2.default.EXCEPTION
  };
}

function computeTreatment(predicateResults) {
  var len = predicateResults.length;

  for (var i = 0; i < len; i++) {
    var evaluation = predicateResults[i];

    if (evaluation !== undefined) {
      log.debug('Treatment found: ' + evaluation.treatment);

      return evaluation;
    }
  }

  log.debug('All predicates evaluated, no treatment found.');
  return undefined;
}

function ifElseIfCombinerContext(predicates) {

  function ifElseIfCombiner(key, seed, trafficAllocation, trafficAllocationSeed, attributes, algo, splitEvaluator) {
    // In Async environments we are going to have async predicates. There is none way to know
    // before hand so we need to evaluate all the predicates, verify for thenables, and finally,
    // define how to return the treatment (wrap result into a Promise or not).
    var predicateResults = predicates.map(function (evaluator) {
      return evaluator(key, seed, trafficAllocation, trafficAllocationSeed, splitEvaluator, attributes, algo);
    });

    // if we find a thenable
    if ((0, _lang.findIndex)(predicateResults, _thenable2.default) !== -1) {
      return _promise2.default.all(predicateResults).then(function (results) {
        return computeTreatment(results);
      });
    }

    return computeTreatment(predicateResults);
  }

  // if there is none predicates, then there was an error in parsing phase
  if (!Array.isArray(predicates) || Array.isArray(predicates) && predicates.length === 0) {
    return unexpectedInputHandler;
  } else {
    return ifElseIfCombiner;
  }
}

exports.default = ifElseIfCombinerContext;
module.exports = exports.default;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _lang = __webpack_require__(1);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var log = (0, _logger2.default)('splitio-engine:combiner');


function andResults(results) {
  var i = 0;
  var len = results.length;
  var hasMatchedAll = void 0;

  // loop through all the matchers an stop at the first one returning false.
  for (; i < len && results[i]; i++) {
    // logic is run inside the condition of evaluates next step.
  }

  hasMatchedAll = i === len;

  log.debug('[andCombiner] evaluates to ' + hasMatchedAll);

  return hasMatchedAll;
}

function andCombinerContext(matchers) {

  function andCombiner() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    var matcherResults = matchers.map(function (matcher) {
      return matcher.apply(undefined, params);
    });

    // If any matching result is a thenable we should use Promise.all
    if ((0, _lang.findIndex)(matcherResults, _thenable2.default) !== -1) {
      return _promise2.default.all(matcherResults).then(andResults);
    } else {
      return andResults(matcherResults);
    }
  }

  return andCombiner;
}

exports.default = andCombinerContext;
module.exports = exports.default;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var log = (0, _logger2.default)('splitio-client:impression-tracker');

function ImpressionsTrackerContext(context) {
  var collector = context.get(context.constants.STORAGE).impressions;
  var settings = context.get(context.constants.SETTINGS);
  var listener = settings.impressionListener;
  var _settings$runtime = settings.runtime,
      ip = _settings$runtime.ip,
      hostname = _settings$runtime.hostname;

  var sdkLanguageVersion = settings.version;

  return {
    track: function track(impression, attributes) {
      var res = collector.track([impression]);

      // If we're on an async storage, handle error and log it.
      if ((0, _thenable2.default)(res)) res.catch(function (err) {
        log.error('Could not store impression. Error: ' + err);
      });

      // Wrap in a timeout because we don't want it to be blocking.
      listener && setTimeout(function () {
        try {
          // An exception on the listener should not break the SDK.
          listener.logImpression({
            impression: impression,
            attributes: attributes,
            ip: ip,
            hostname: hostname,
            sdkLanguageVersion: sdkLanguageVersion
          });
        } catch (err) {
          log.error('Impression listener logImpression method threw: ' + err + '.');
        }
      }, 0);
    }
  };
}

exports.default = ImpressionsTrackerContext;
module.exports = exports.default;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _thenable = __webpack_require__(6);

var _thenable2 = _interopRequireDefault(_thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var log = (0, _logger2.default)('splitio-client:impressions-tracker');

function ImpressionsTrackerContext(context) {
  var collector = context.get(context.constants.STORAGE).impressions;
  var settings = context.get(context.constants.SETTINGS);
  var listener = settings.impressionListener;
  var _settings$runtime = settings.runtime,
      ip = _settings$runtime.ip,
      hostname = _settings$runtime.hostname;

  var sdkLanguageVersion = settings.version;
  var _queue = [];

  return {
    queue: function queue(impression, attributes) {
      _queue.push({
        impression: impression,
        attributes: attributes
      });
    },
    track: function track() {
      var impressionsCount = _queue.length;
      var slice = _queue.splice(0, impressionsCount);
      var res = collector.track(slice.map(function (_ref) {
        var impression = _ref.impression;
        return impression;
      }));

      // If we're on an async storage, handle error and log it.
      if ((0, _thenable2.default)(res)) {
        res.then(function () {
          log.debug('Successfully stored ' + impressionsCount + ' impression' + (impressionsCount === 1 ? '' : 's') + '.');
        }).catch(function (err) {
          log.error('Could not store impressions bulk with ' + impressionsCount + ' impression' + (impressionsCount === 1 ? '' : 's') + '. Error: ' + err);
        });
      }
      // Wrap in a timeout because we don't want it to be blocking.

      var _loop = function _loop(i) {
        listener && setTimeout(function () {
          try {
            // An exception on the listener should not break the SDK.
            listener.logImpression({
              impression: slice[i].impression,
              attributes: slice[i].attributes,
              ip: ip,
              hostname: hostname,
              sdkLanguageVersion: sdkLanguageVersion
            });
          } catch (err) {
            log.error('Impression listener logImpression method threw: ' + err + '.');
          }
        }, 0);
      };

      for (var i = 0; i < impressionsCount; i++) {
        _loop(i);
      }
    }
  };
}

exports.default = ImpressionsTrackerContext;
module.exports = exports.default;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _task = __webpack_require__(77);

var _task2 = _interopRequireDefault(_task);

var _SplitChanges = __webpack_require__(283);

var _SplitChanges2 = _interopRequireDefault(_SplitChanges);

var _MySegments = __webpack_require__(123);

var _MySegments2 = _interopRequireDefault(_MySegments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-producer:updater'); /**
                                                             Copyright 2016 Split Software

                                                             Licensed under the Apache License, Version 2.0 (the "License");
                                                             you may not use this file except in compliance with the License.
                                                             You may obtain a copy of the License at

                                                                 http://www.apache.org/licenses/LICENSE-2.0

                                                             Unless required by applicable law or agreed to in writing, software
                                                             distributed under the License is distributed on an "AS IS" BASIS,
                                                             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                             See the License for the specific language governing permissions and
                                                             limitations under the License.
                                                             **/

/**
 * Startup all the background jobs required for a Browser SDK instance.
 */
var FullBrowserProducer = function FullBrowserProducer(context) {
  var splitsUpdater = (0, _SplitChanges2.default)(context);
  var segmentsUpdater = (0, _MySegments2.default)(context);
  var settings = context.get(context.constants.SETTINGS);

  var splitsUpdaterTask = (0, _task2.default)(splitsUpdater, settings.scheduler.featuresRefreshRate);
  var segmentsUpdaterTask = (0, _task2.default)(segmentsUpdater, settings.scheduler.segmentsRefreshRate);

  return {
    start: function start() {
      log.info('Starting BROWSER producer');

      splitsUpdaterTask.start();
      segmentsUpdaterTask.start();
    },
    stop: function stop() {
      log.info('Stopping BROWSER producer');

      splitsUpdaterTask.stop();
      segmentsUpdaterTask.stop();
    }
  };
};

exports.default = FullBrowserProducer;
module.exports = exports.default;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(51);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(49);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__(76);

var _set2 = _interopRequireDefault(_set);

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = __webpack_require__(28);

var _stringify2 = _interopRequireDefault(_stringify);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _SplitChanges = __webpack_require__(284);

var _SplitChanges2 = _interopRequireDefault(_SplitChanges);

var _segments = __webpack_require__(307);

var _segments2 = _interopRequireDefault(_segments);

var _SplitNetworkError = __webpack_require__(80);

var _SplitNetworkError2 = _interopRequireDefault(_SplitNetworkError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-producer:split-changes'); /**
                                                                   Copyright 2016 Split Software

                                                                   Licensed under the Apache License, Version 2.0 (the "License");
                                                                   you may not use this file except in compliance with the License.
                                                                   You may obtain a copy of the License at

                                                                       http://www.apache.org/licenses/LICENSE-2.0

                                                                   Unless required by applicable law or agreed to in writing, software
                                                                   distributed under the License is distributed on an "AS IS" BASIS,
                                                                   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                   See the License for the specific language governing permissions and
                                                                   limitations under the License.
                                                                   **/

function computeSplitsMutation(entries) {
  var computed = entries.reduce(function (accum, split) {
    if (split.status === 'ACTIVE') {
      accum.added.push([split.name, (0, _stringify2.default)(split)]);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)((0, _segments2.default)(split.conditions)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var segmentName = _step.value;

          accum.segments.add(segmentName);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      accum.removed.push(split.name);
    }

    return accum;
  }, {
    added: [],
    removed: [],
    segments: new _set2.default()
  });

  computed.segments = [].concat((0, _toConsumableArray3.default)(computed.segments));

  return computed;
}

function SplitChangesUpdaterFactory(context) {
  var isNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _context$getAll = context.getAll(),
      settings = _context$getAll[context.constants.SETTINGS],
      readiness = _context$getAll[context.constants.READINESS],
      storage = _context$getAll[context.constants.STORAGE],
      metricCollectors = _context$getAll[context.constants.COLLECTORS];

  var splitsEventEmitter = readiness.splits;

  var startingUp = true;
  var readyOnAlreadyExistentState = true;

  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var retry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var since;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return storage.splits.getChangeNumber();

            case 2:
              since = _context.sent;


              log.debug('Spin up split update using since = ' + since);

              return _context.abrupt('return', (0, _SplitChanges2.default)(settings, since, startingUp, metricCollectors, isNode).then(function (splitChanges) {
                startingUp = false;

                var mutation = computeSplitsMutation(splitChanges.splits);

                log.debug('New splits ' + mutation.added.length);
                log.debug('Removed splits ' + mutation.removed.length);
                log.debug('Segment names collected ' + mutation.segments);

                // Write into storage
                return _promise2.default.all([storage.splits.addSplits(mutation.added), storage.splits.removeSplits(mutation.removed), storage.splits.setChangeNumber(splitChanges.till), storage.segments.registerSegments(mutation.segments)]).then(function () {
                  if (since !== splitChanges.till || readyOnAlreadyExistentState) {
                    readyOnAlreadyExistentState = false;
                    splitsEventEmitter.emit(splitsEventEmitter.SDK_SPLITS_ARRIVED);
                  }
                });
              }).catch(function (error) {
                if (!(error instanceof _SplitNetworkError2.default)) {
                  setTimeout(function () {
                    throw error;
                  }, 0);
                  startingUp = false; // Stop retrying.
                }

                log.error('Error while doing fetch of Splits ' + error);

                if (startingUp && settings.startup.retriesOnFailureBeforeReady > retry) {
                  retry += 1;
                  log.warn('Retrying download of splits #' + retry + '. Reason: ' + error);
                  return SplitChangesUpdater(retry);
                } else {
                  startingUp = false;
                }

                return false;
              }));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function SplitChangesUpdater() {
      return _ref.apply(this, arguments);
    }

    return SplitChangesUpdater;
  }();
}

exports.default = SplitChangesUpdaterFactory;
module.exports = exports.default;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timeout = __webpack_require__(117);

var _timeout2 = _interopRequireDefault(_timeout);

var _timeTracker = __webpack_require__(23);

var _timeTracker2 = _interopRequireDefault(_timeTracker);

var _splitChanges = __webpack_require__(285);

var _splitChanges2 = _interopRequireDefault(_splitChanges);

var _get = __webpack_require__(305);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

function splitChangesFetcher(settings, since) {
  var startingUp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var metricCollectors = arguments[3];
  var isNode = arguments[4];

  var splitsPromise = (0, _splitChanges2.default)((0, _get2.default)(settings, since));
  var collectMetrics = startingUp || isNode; // If we are on the browser, only collect this metric for first fetch. On node do it always.

  splitsPromise = _timeTracker2.default.start(_timeTracker2.default.TaskNames.SPLITS_FETCH, collectMetrics ? metricCollectors : false, splitsPromise);

  if (startingUp) {
    // Decorate with the timeout functionality if required
    splitsPromise = (0, _timeout2.default)(settings.startup.requestTimeoutBeforeReady, splitsPromise);
  }

  return splitsPromise.then(function (resp) {
    return resp.data;
  });
}

exports.default = splitChangesFetcher;
module.exports = exports.default;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transport = __webpack_require__(39);

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _transport2.default; /**
                                       Copyright 2016 Split Software

                                       Licensed under the Apache License, Version 2.0 (the "License");
                                       you may not use this file except in compliance with the License.
                                       You may obtain a copy of the License at

                                           http://www.apache.org/licenses/LICENSE-2.0

                                       Unless required by applicable law or agreed to in writing, software
                                       distributed under the License is distributed on an "AS IS" BASIS,
                                       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                       See the License for the specific language governing permissions and
                                       limitations under the License.
                                       **/

module.exports = exports.default;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(287);

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);
var bind = __webpack_require__(118);
var Axios = __webpack_require__(289);
var defaults = __webpack_require__(79);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(122);
axios.CancelToken = __webpack_require__(303);
axios.isCancel = __webpack_require__(121);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(304);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 288 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(79);
var utils = __webpack_require__(11);
var InterceptorManager = __webpack_require__(298);
var dispatchRequest = __webpack_require__(299);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(120);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);
var transformData = __webpack_require__(300);
var isCancel = __webpack_require__(121);
var defaults = __webpack_require__(79);
var isAbsoluteURL = __webpack_require__(301);
var combineURLs = __webpack_require__(302);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(122);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GET;

var _request = __webpack_require__(29);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GET(settings, since) {
  return (0, _request2.default)(settings, '/splitChanges?since=' + since);
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/
module.exports = exports.default;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {};
};

module.exports = exports.default;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = __webpack_require__(76);

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Collect segments from a raw split definition.
 */
var parseSegments = function parseSegments(conditions) {
  var segments = new _set2.default();

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(conditions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var condition = _step.value;
      var matchers = condition.matcherGroup.matchers;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {

        for (var _iterator2 = (0, _getIterator3.default)(matchers), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var matcher = _step2.value;
          var matcherType = matcher.matcherType,
              userDefinedSegmentMatcherData = matcher.userDefinedSegmentMatcherData;


          if (matcherType === 'IN_SEGMENT') {
            segments.add(userDefinedSegmentMatcherData.segmentName);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return segments;
};

exports.default = parseSegments;
module.exports = exports.default;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timeout = __webpack_require__(117);

var _timeout2 = _interopRequireDefault(_timeout);

var _timeTracker = __webpack_require__(23);

var _timeTracker2 = _interopRequireDefault(_timeTracker);

var _mySegments = __webpack_require__(309);

var _mySegments2 = _interopRequireDefault(_mySegments);

var _get = __webpack_require__(310);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var mySegmentsFetcher = function mySegmentsFetcher(settings) {
  var startingUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var metricCollectors = arguments[2];

  var mySegmentsPromise = (0, _mySegments2.default)((0, _get2.default)(settings));

  mySegmentsPromise = _timeTracker2.default.start(_timeTracker2.default.TaskNames.MY_SEGMENTS_FETCH, startingUp ? metricCollectors : false, mySegmentsPromise);

  // Decorate with the timeout functionality if required
  if (startingUp) {
    mySegmentsPromise = (0, _timeout2.default)(settings.startup.requestTimeoutBeforeReady, mySegmentsPromise);
  }

  // Extract segment names
  return mySegmentsPromise.then(function (resp) {
    return resp.data;
  }).then(function (json) {
    return json.mySegments.map(function (segment) {
      return segment.name;
    });
  });
};

exports.default = mySegmentsFetcher;
module.exports = exports.default;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transport = __webpack_require__(39);

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _transport2.default; /**
                                       Copyright 2016 Split Software

                                       Licensed under the Apache License, Version 2.0 (the "License");
                                       you may not use this file except in compliance with the License.
                                       You may obtain a copy of the License at

                                           http://www.apache.org/licenses/LICENSE-2.0

                                       Unless required by applicable law or agreed to in writing, software
                                       distributed under the License is distributed on an "AS IS" BASIS,
                                       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                       See the License for the specific language governing permissions and
                                       limitations under the License.
                                       **/

module.exports = exports.default;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GET;

var _request = __webpack_require__(29);

var _request2 = _interopRequireDefault(_request);

var _factory = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
function GET(settings) {
  return (0, _request2.default)(settings, '/mySegments/' + (0, _factory.matching)(settings.core.key));
}
module.exports = exports.default;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _task = __webpack_require__(77);

var _task2 = _interopRequireDefault(_task);

var _MySegments = __webpack_require__(123);

var _MySegments2 = _interopRequireDefault(_MySegments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Incremental updater to be used to share data in the browser.
 */
/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var PartialBrowserProducer = function PartialBrowserProducer(context) {
  var settings = context.get(context.constants.SETTINGS);
  var segmentsUpdater = (0, _MySegments2.default)(context);
  var segmentsUpdaterTask = (0, _task2.default)(segmentsUpdater, settings.scheduler.segmentsRefreshRate);

  return segmentsUpdaterTask;
};

exports.default = PartialBrowserProducer;
module.exports = exports.default;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(28);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _timeTracker = __webpack_require__(23);

var _timeTracker2 = _interopRequireDefault(_timeTracker);

var _repeat = __webpack_require__(78);

var _repeat2 = _interopRequireDefault(_repeat);

var _metrics = __webpack_require__(313);

var _metrics2 = _interopRequireDefault(_metrics);

var _times = __webpack_require__(314);

var _times2 = _interopRequireDefault(_times);

var _counters = __webpack_require__(315);

var _counters2 = _interopRequireDefault(_counters);

var _dto = __webpack_require__(316);

var _impressions = __webpack_require__(317);

var _impressions2 = _interopRequireDefault(_impressions);

var _bulk = __webpack_require__(318);

var _bulk2 = _interopRequireDefault(_bulk);

var _dto2 = __webpack_require__(319);

var _Collectors = __webpack_require__(320);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-metrics'); /**
                                                    Copyright 2016 Split Software

                                                    Licensed under the Apache License, Version 2.0 (the "License");
                                                    you may not use this file except in compliance with the License.
                                                    You may obtain a copy of the License at

                                                        http://www.apache.org/licenses/LICENSE-2.0

                                                    Unless required by applicable law or agreed to in writing, software
                                                    distributed under the License is distributed on an "AS IS" BASIS,
                                                    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                    See the License for the specific language governing permissions and
                                                    limitations under the License.
                                                    **/

var MetricsFactory = function MetricsFactory(context) {
  var impressionsRetries = 0;
  var settings = context.get(context.constants.SETTINGS);
  var storage = context.get(context.constants.STORAGE);

  var pushMetrics = function pushMetrics() {
    if (storage.metrics.isEmpty() && storage.count.isEmpty()) return _promise2.default.resolve();

    log.info('Pushing metrics');
    var latencyTrackerStop = _timeTracker2.default.start(_timeTracker2.default.TaskNames.METRICS_PUSH);

    // POST latencies
    var latenciesPromise = storage.metrics.isEmpty() ? null : (0, _metrics2.default)((0, _times2.default)(settings, {
      data: (0, _stringify2.default)((0, _dto.fromLatenciesCollector)(storage.metrics))
    })).then(function () {
      return storage.metrics.clear();
    }).catch(function () {
      return storage.metrics.clear();
    });

    // POST counters
    var countersPromise = storage.count.isEmpty() ? null : (0, _metrics2.default)((0, _counters2.default)(settings, {
      data: (0, _stringify2.default)((0, _dto.fromCountersCollector)(storage.count))
    })).then(function () {
      return storage.count.clear();
    }).catch(function () {
      return storage.count.clear();
    });

    return _promise2.default.all([latenciesPromise, countersPromise]).then(function (resp) {
      // After both finishes, track the end and return the results
      latencyTrackerStop();
      return resp;
    });
  };

  var pushImpressions = function pushImpressions() {
    if (storage.impressions.isEmpty()) return _promise2.default.resolve();
    var imprCount = storage.impressions.queue.length;

    log.info('Pushing ' + imprCount + ' impressions');
    var latencyTrackerStop = _timeTracker2.default.start(_timeTracker2.default.TaskNames.IMPRESSIONS_PUSH);

    return (0, _impressions2.default)((0, _bulk2.default)(settings, {
      data: (0, _stringify2.default)((0, _dto2.fromImpressionsCollector)(storage.impressions, settings))
    })).then(function () {
      impressionsRetries = 0;
      storage.impressions.clear();
    }).catch(function (err) {
      if (impressionsRetries) {
        // For now we retry only once.
        log.warn('Droping ' + imprCount + ' impressions after retry. Reason ' + err + '.');
        impressionsRetries = 0;
        storage.impressions.clear();
      } else {
        impressionsRetries++;
        log.warn('Failed to push ' + imprCount + ' impressions, keeping data to retry on next iteration. Reason ' + err + '.');
      }
    }).then(function () {
      return latencyTrackerStop();
    });
  };

  var stopImpressionsPublisher = false;
  var stopPerformancePublisher = false;

  return {
    start: function start() {
      stopImpressionsPublisher = (0, _repeat2.default)(function (schedulePublisher) {
        return pushImpressions().then(function () {
          return schedulePublisher();
        });
      }, settings.scheduler.impressionsRefreshRate);

      stopPerformancePublisher = (0, _repeat2.default)(function (schedulePublisher) {
        return pushMetrics().then(function () {
          return schedulePublisher();
        });
      }, settings.scheduler.metricsRefreshRate);
    },
    flush: function flush() {
      return pushImpressions();
    },
    stop: function stop() {
      stopImpressionsPublisher && stopImpressionsPublisher();
      stopPerformancePublisher && stopPerformancePublisher();
    },


    // Metrics collectors
    collectors: {
      segmentChanges: new _Collectors.SegmentChangesCollector(storage),
      splitChanges: new _Collectors.SplitChangesCollector(storage),
      mySegments: new _Collectors.MySegmentsCollector(storage),
      SDK: new _Collectors.SDKCollector(storage)
    }
  };
};

exports.default = MetricsFactory;
module.exports = exports.default;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transport = __webpack_require__(39);

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _transport2.default; /**
                                       Copyright 2016 Split Software

                                       Licensed under the Apache License, Version 2.0 (the "License");
                                       you may not use this file except in compliance with the License.
                                       You may obtain a copy of the License at

                                           http://www.apache.org/licenses/LICENSE-2.0

                                       Unless required by applicable law or agreed to in writing, software
                                       distributed under the License is distributed on an "AS IS" BASIS,
                                       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                       See the License for the specific language governing permissions and
                                       limitations under the License.
                                       **/

module.exports = exports.default;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

exports.default = POST;

var _request = __webpack_require__(29);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function POST(settings, params) {
  return (0, _request2.default)(settings, '/metrics/times', (0, _assign2.default)({
    method: 'POST'
  }, params));
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/
module.exports = exports.default;

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

exports.default = POST;

var _request = __webpack_require__(29);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function POST(settings, params) {
  return (0, _request2.default)(settings, '/metrics/counters', (0, _assign2.default)({
    method: 'POST'
  }, params));
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/
module.exports = exports.default;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromLatenciesCollector = fromLatenciesCollector;
exports.fromCountersCollector = fromCountersCollector;

var _lang = __webpack_require__(1);

function fromLatenciesCollector(latenciesCollector) {
  var result = [];
  var metrics = latenciesCollector.toJSON();

  (0, _lang.forOwn)(metrics, function (latencies, key) {
    result.push({
      name: key,
      latencies: latencies
    });
  });

  return result;
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/
function fromCountersCollector(countersCollector) {
  var result = [];
  var metrics = countersCollector.toJSON();

  (0, _lang.forOwn)(metrics, function (delta, key) {
    result.push({
      name: key,
      delta: delta
    });
  });

  return result;
}

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transport = __webpack_require__(39);

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _transport2.default; /**
                                       Copyright 2016 Split Software

                                       Licensed under the Apache License, Version 2.0 (the "License");
                                       you may not use this file except in compliance with the License.
                                       You may obtain a copy of the License at

                                           http://www.apache.org/licenses/LICENSE-2.0

                                       Unless required by applicable law or agreed to in writing, software
                                       distributed under the License is distributed on an "AS IS" BASIS,
                                       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                       See the License for the specific language governing permissions and
                                       limitations under the License.
                                       **/

module.exports = exports.default;

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

exports.default = BULK;

var _request = __webpack_require__(29);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BULK(settings, params) {
  return (0, _request2.default)(settings, '/testImpressions/bulk', (0, _assign2.default)({
    method: 'POST'
  }, params));
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/
module.exports = exports.default;

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromImpressionsCollector = fromImpressionsCollector;

var _lang = __webpack_require__(1);

function fromImpressionsCollector(collector, settings) {
  var sendLabels = settings.core.labelsEnabled;
  var groupedByFeature = (0, _lang.groupBy)(collector.state(), 'feature');
  var dto = [];

  for (var name in groupedByFeature) {
    dto.push({
      testName: name,
      keyImpressions: groupedByFeature[name].map(function (entry) {
        var keyImpression = {
          keyName: entry.keyName,
          treatment: entry.treatment,
          time: entry.time,
          changeNumber: entry.changeNumber
        };

        if (sendLabels) keyImpression.label = entry.label;
        if (entry.bucketingKey) keyImpression.bucketingKey = entry.bucketingKey;

        return keyImpression;
      })
    });
  }

  return dto;
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SDKCollector = exports.MySegmentsCollector = exports.SplitChangesCollector = exports.SegmentChangesCollector = undefined;

var _getPrototypeOf = __webpack_require__(70);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __webpack_require__(71);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(72);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetricsCollector = function () {
  function MetricsCollector(storage) {
    (0, _classCallCheck3.default)(this, MetricsCollector);

    this.storage = storage;

    this.latency = this.latency.bind(this);
    this.count = this.count.bind(this);
    this.countException = this.countException.bind(this);
  }

  (0, _createClass3.default)(MetricsCollector, [{
    key: 'latency',
    value: function latency(ms) {
      this.storage.metrics.track(this.metricType + '.time', ms);
    }
  }, {
    key: 'count',
    value: function count(status) {
      this.storage.count.track(this.metricType + '.status.' + status);
    }
  }, {
    key: 'countException',
    value: function countException() {
      this.storage.count.track(this.metricType + '.exception');
    }
  }]);
  return MetricsCollector;
}();

var SegmentChangesCollector = exports.SegmentChangesCollector = function (_MetricsCollector) {
  (0, _inherits3.default)(SegmentChangesCollector, _MetricsCollector);

  function SegmentChangesCollector(storage) {
    (0, _classCallCheck3.default)(this, SegmentChangesCollector);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SegmentChangesCollector.__proto__ || (0, _getPrototypeOf2.default)(SegmentChangesCollector)).call(this, storage));

    _this.metricType = 'segmentChangeFetcher';
    return _this;
  }

  return SegmentChangesCollector;
}(MetricsCollector);

var SplitChangesCollector = exports.SplitChangesCollector = function (_MetricsCollector2) {
  (0, _inherits3.default)(SplitChangesCollector, _MetricsCollector2);

  function SplitChangesCollector(storage) {
    (0, _classCallCheck3.default)(this, SplitChangesCollector);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (SplitChangesCollector.__proto__ || (0, _getPrototypeOf2.default)(SplitChangesCollector)).call(this, storage));

    _this2.metricType = 'splitChangeFetcher';
    return _this2;
  }

  return SplitChangesCollector;
}(MetricsCollector);

var MySegmentsCollector = exports.MySegmentsCollector = function (_MetricsCollector3) {
  (0, _inherits3.default)(MySegmentsCollector, _MetricsCollector3);

  function MySegmentsCollector(storage) {
    (0, _classCallCheck3.default)(this, MySegmentsCollector);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (MySegmentsCollector.__proto__ || (0, _getPrototypeOf2.default)(MySegmentsCollector)).call(this, storage));

    _this3.metricType = 'mySegmentsFetcher';
    return _this3;
  }

  return MySegmentsCollector;
}(MetricsCollector);

var SDKCollector = exports.SDKCollector = function () {
  function SDKCollector(storage) {
    (0, _classCallCheck3.default)(this, SDKCollector);

    this.storage = storage;

    this.ready = this.ready.bind(this);
    this.latency = this.latency.bind(this);
  }

  (0, _createClass3.default)(SDKCollector, [{
    key: 'ready',
    value: function ready(ms) {
      this.storage.metrics.track('sdk.ready', ms);
    }
  }, {
    key: 'latency',
    value: function latency(ms) {
      this.storage.metrics.track('sdk.getTreatment', ms);
    }
  }]);
  return SDKCollector;
}();

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(28);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(9);

var _promise2 = _interopRequireDefault(_promise);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _timeTracker = __webpack_require__(23);

var _timeTracker2 = _interopRequireDefault(_timeTracker);

var _repeat = __webpack_require__(78);

var _repeat2 = _interopRequireDefault(_repeat);

var _events = __webpack_require__(322);

var _events2 = _interopRequireDefault(_events);

var _bulk = __webpack_require__(323);

var _bulk2 = _interopRequireDefault(_bulk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-events');


var EventsFactory = function EventsFactory(context) {
  var settings = context.get(context.constants.SETTINGS);
  var storage = context.get(context.constants.STORAGE);

  var pushEvents = function pushEvents() {
    if (storage.events.isEmpty()) return _promise2.default.resolve();

    log.info('Pushing ' + storage.events.state().length + ' queued events.');
    var latencyTrackerStop = _timeTracker2.default.start(_timeTracker2.default.TaskNames.EVENTS_PUSH);
    var json = (0, _stringify2.default)(storage.events.toJSON());
    var wrapUpCb = function wrapUpCb() {
      return latencyTrackerStop();
    };
    storage.events.clear(); // we always clear the queue.

    return (0, _events2.default)((0, _bulk2.default)(settings, {
      data: json
    })).then(wrapUpCb).catch(wrapUpCb);
  };

  var stopEventPublisherTimeout = false;
  var stopEventsPublisher = false;
  var startEventsPublisher = function startEventsPublisher() {
    return stopEventsPublisher = (0, _repeat2.default)(function (schedulePublisher) {
      return pushEvents().then(function () {
        return schedulePublisher();
      });
    }, settings.scheduler.eventsPushRate);
  };

  return {
    start: function start() {
      // On the browser there may be a wish to wait an specific amount of seconds before the first push.
      if (settings.startup.eventsFirstPushWindow > 0) {
        stopEventPublisherTimeout = setTimeout(startEventsPublisher, settings.startup.eventsFirstPushWindow);
      } else {
        startEventsPublisher();
      }
    },
    flush: function flush() {
      return pushEvents();
    },
    stop: function stop() {
      stopEventPublisherTimeout && clearTimeout(stopEventPublisherTimeout);
      stopEventsPublisher && stopEventsPublisher();
    },
    flushAndResetTimer: function flushAndResetTimer() {
      // Reset the timer and push the events.
      log.info('Flushing events and reseting timer.');
      stopEventsPublisher && stopEventsPublisher.reset();
      return pushEvents();
    }
  };
};

exports.default = EventsFactory;
module.exports = exports.default;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transport = __webpack_require__(39);

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _transport2.default; /**
                                       Copyright 2016 Split Software

                                       Licensed under the Apache License, Version 2.0 (the "License");
                                       you may not use this file except in compliance with the License.
                                       You may obtain a copy of the License at

                                           http://www.apache.org/licenses/LICENSE-2.0

                                       Unless required by applicable law or agreed to in writing, software
                                       distributed under the License is distributed on an "AS IS" BASIS,
                                       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                       See the License for the specific language governing permissions and
                                       limitations under the License.
                                       **/

module.exports = exports.default;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

exports.default = BULK;

var _request = __webpack_require__(29);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BULK(settings, params) {
  return (0, _request2.default)(settings, '/events/bulk', (0, _assign2.default)({
    method: 'POST'
  }, params));
} /**
  Copyright 2016 Split Software

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  **/
module.exports = exports.default;

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Not implemented yet.
 */
var BrowserSignalListener = function () {
  function BrowserSignalListener() {
    // noop

    (0, _classCallCheck3.default)(this, BrowserSignalListener);
  }

  (0, _createClass3.default)(BrowserSignalListener, [{
    key: "start",
    value: function start() {
      // noop
    }
  }, {
    key: "stop",
    value: function stop() {
      // noop
    }
  }]);
  return BrowserSignalListener;
}();

exports.default = BrowserSignalListener;
module.exports = exports.default;

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(51);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _create = __webpack_require__(38);

var _create2 = _interopRequireDefault(_create);

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _client = __webpack_require__(115);

var _client2 = _interopRequireDefault(_client);

var _offline = __webpack_require__(326);

var _offline2 = _interopRequireDefault(_offline);

var _callbacksHandler = __webpack_require__(124);

var _callbacksHandler2 = _interopRequireDefault(_callbacksHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Create SDK instance for offline mode.
//
function SplitFactoryOffline(context, gateFactory, sharedTrackers) {
  var sharedInstance = !sharedTrackers;
  var settings = context.get(context.constants.SETTINGS);
  var storage = context.get(context.constants.STORAGE);

  // Put readiness config within context
  var readiness = gateFactory(settings.startup.readyTimeout);
  context.put(context.constants.READINESS, readiness);

  // We are only interested in exposable EventEmitter
  var gate = readiness.gate;

  // Events name

  var SDK_READY = gate.SDK_READY,
      SDK_UPDATE = gate.SDK_UPDATE,
      SDK_READY_TIMED_OUT = gate.SDK_READY_TIMED_OUT;

  // Ready promise

  var readyFlag = (0, _callbacksHandler2.default)(gate)(sharedInstance);

  // Producer
  var producer = sharedInstance ? undefined : (0, _offline2.default)(context);

  // Start background task for flag updates
  producer && producer.start();

  var api = (0, _assign2.default)(
  // Proto linkage of the EventEmitter to prevent any change
  (0, _create2.default)(gate),
  // GetTreatment/s
  (0, _client2.default)(context),
  // Utilities
  {
    // Ready promise
    ready: function ready() {
      return readyFlag;
    },


    // Events contants
    Event: {
      SDK_READY: SDK_READY,
      SDK_UPDATE: SDK_UPDATE,
      SDK_READY_TIMED_OUT: SDK_READY_TIMED_OUT
    },

    // Destroy instance. Async so we respect the online api.
    destroy: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Stop background jobs
                producer && producer.stop();
                // Cleanup event listeners
                readiness.destroy();
                // Cleanup storage
                storage.destroy && storage.destroy();
                // Mark the factory as destroyed.
                context.put(context.constants.DESTROYED, true);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function destroy() {
        return _ref.apply(this, arguments);
      }

      return destroy;
    }()
  });

  return {
    api: api,
    metricCollectors: false // We won't collect any metrics on localhost mode.
  };
}

exports.default = SplitFactoryOffline;
module.exports = exports.default;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _task = __webpack_require__(77);

var _task2 = _interopRequireDefault(_task);

var _SplitChangesFromFeatures = __webpack_require__(327);

var _SplitChangesFromFeatures2 = _interopRequireDefault(_SplitChangesFromFeatures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

var OfflineFeatureProducer = function OfflineFeatureProducer(context) {
  var settings = context.get(context.constants.SETTINGS);
  var updater = (0, _SplitChangesFromFeatures2.default)(context);
  var updaterTask = (0, _task2.default)(updater, settings.scheduler.offlineRefreshRate);

  return updaterTask;
};

exports.default = OfflineFeatureProducer;
module.exports = exports.default;

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _offline = __webpack_require__(328);

var _offline2 = _interopRequireDefault(_offline);

var _SplitChangesFromObject = __webpack_require__(329);

var _SplitChangesFromObject2 = _interopRequireDefault(_SplitChangesFromObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Copyright 2016 Split Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

exports.default = _SplitChangesFromObject2.default.bind(null, _offline2.default);
module.exports = exports.default;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getConfigurationFromSettings(settings) {
  return settings.features || {};
}

exports.default = getConfigurationFromSettings;
module.exports = exports.default;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(28);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(51);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _logger2.default)('splitio-producer:offline'); /**
                                                             Copyright 2016 Split Software

                                                             Licensed under the Apache License, Version 2.0 (the "License");
                                                             you may not use this file except in compliance with the License.
                                                             You may obtain a copy of the License at

                                                                 http://www.apache.org/licenses/LICENSE-2.0

                                                             Unless required by applicable law or agreed to in writing, software
                                                             distributed under the License is distributed on an "AS IS" BASIS,
                                                             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                             See the License for the specific language governing permissions and
                                                             limitations under the License.
                                                             **/

function FromObjectUpdaterFactory(Fetcher, context) {
  var _context$getAll = context.getAll(),
      settings = _context$getAll[context.constants.SETTINGS],
      readiness = _context$getAll[context.constants.READINESS],
      storage = _context$getAll[context.constants.STORAGE];

  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var splits, configs, name;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              splits = [];
              configs = Fetcher(settings);


              log.debug('Splits data:');
              log.debug((0, _stringify2.default)(configs));

              // Make use of the killed behavior to prevent loading all the information
              // for a given Split.
              for (name in configs) {
                splits.push([name, (0, _stringify2.default)({
                  name: name,
                  status: 'ACTIVE',
                  killed: true,
                  defaultTreatment: configs[name],
                  conditions: []
                })]);
              }_context.next = 7;
              return storage.splits.flush();

            case 7:
              _context.next = 9;
              return storage.splits.addSplits(splits);

            case 9:

              readiness.splits.emit(readiness.splits.SDK_SPLITS_ARRIVED);
              readiness.segments.emit(readiness.segments.SDK_SEGMENTS_ARRIVED);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function ObjectUpdater() {
      return _ref.apply(this, arguments);
    }

    return ObjectUpdater;
  }();
}

exports.default = FromObjectUpdaterFactory;
module.exports = exports.default;

/***/ })
/******/ ]);
});
