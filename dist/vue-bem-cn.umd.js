(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueBemCn"] = factory();
	else
		root["vueBemCn"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(1)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(6)
  , defined = __webpack_require__(5);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(10);

var _assign2 = _interopRequireDefault(_assign);

var _bemCnLite = __webpack_require__(11);

var _bemCnLite2 = _interopRequireDefault(_bemCnLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue, config) {
    var cfg = (0, _assign2.default)({
      el: '__',
      mod: '--',
      modValue: '-'
    }, config);

    _bemCnLite2.default.setup(cfg);

    Vue.mixin({
      created: function created() {
        var block = this.$options.block || this.$options.name;

        if (typeof block !== 'string') return;

        var generator = (0, _bemCnLite2.default)(block);
        this.b = function () {
          return generator.apply(undefined, arguments);
        };
      }
    });
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bemClassName = __webpack_require__(12);

function bemClassNameLite(blockName) {
  var b = bemClassName(blockName);

  function element(elementName, modifiers, mixin) {
    var result = b(elementName);

    if (typeof elementName !== 'string' || typeof elementName === 'string' && typeof modifiers === 'string') {
      mixin = modifiers;
      modifiers = null;
    }

    if (modifiers) {
      result = result(modifiers);
    }

    if (mixin) {
      result = result.mix(mixin);
    }

    return result.toString();
  }

  element.builder = function () {
    return b;
  };

  return element;
}

bemClassNameLite.setup = function (config) {
  bemClassName.setup(config);
};

bemClassNameLite.reset = function () {
  bemClassName.reset();
};

module.exports = bemClassNameLite;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * bem-cn v2.1.3
 * Friendly BEM class names generator, greate for React
 * @author Alexander Burtsev, https://github.com/albburtsev
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["block"] = factory();
	else
		root["block"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * How it's working?
	                                                                                                                                                                                                                                                   * The essential part of this module is based on using currying pattern.
	                                                                                                                                                                                                                                                   * Just take a look at the interface:
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * @example
	                                                                                                                                                                                                                                                  const selector = (settings, context) => {
	                                                                                                                                                                                                                                                  	const inner = () => {
	                                                                                                                                                                                                                                                  		return selector(...);
	                                                                                                                                                                                                                                                  	};
	                                                                                                                                                                                                                                                  
	                                                                                                                                                                                                                                                  	inner.toString = inner.valueOf = () => {
	                                                                                                                                                                                                                                                  		// ...
	                                                                                                                                                                                                                                                  	}
	                                                                                                                                                                                                                                                  
	                                                                                                                                                                                                                                                  	// ...
	                                                                                                                                                                                                                                                  
	                                                                                                                                                                                                                                                  	return inner;
	                                                                                                                                                                                                                                                  };
	                                                                                                                                                                                                                                                  
	                                                                                                                                                                                                                                                  const block = (name) => {
	                                                                                                                                                                                                                                                  	// ...
	                                                                                                                                                                                                                                                  
	                                                                                                                                                                                                                                                  	return selector(defaultSettings, {name});
	                                                                                                                                                                                                                                                  };
	                                                                                                                                                                                                                                                   */


	var _helpers = __webpack_require__(2);

	var _constants = __webpack_require__(1);

	var IS_PREFIX = 'is-';
	var HAS_PREFIX = 'has-';

	var defaultSettings = {
		ns: '',
		el: '__',
		mod: '_',
		modValue: '_',
		classMap: null
	},

	// Settings object is global on module level
	settings = (0, _helpers.assign)({}, defaultSettings);

	/**
	 * Returns given mixes as list of strings
	 * @param {*[]} mixes
	 * @return {String[]}
	 * @example
	block('block').mix(block('another')); "block another"
	block('one').mix(['two', 'three']); "one two three"
	 */
	function normilizeMixes() {
		var mixes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		return mixes.map(function (mix) {
			if (typeof mix === 'function') {
				return mix.toString();
			} else if (Array.isArray(mix)) {
				return mix.join(' ');
			} else if (typeof mix === 'string') {
				return mix;
			}

			return '';
		}).filter(function (mix) {
			return mix;
		});
	}

	/**
	 * Returns final set of classes
	 * @return {String}
	 */
	function toString(settings, context) {
		var name = context.name;
		var mods = context.mods;
		var mixes = context.mixes;
		var states = context.states;
		var classes = [name];

		// Add list of modifiers
		if (mods) {
			classes = classes.concat(Object.keys(mods).filter(function (key) {
				return mods[key];
			}).map(function (key) {
				var value = mods[key];

				// Modifier with only name
				if (value === true) {
					return name + settings.mod + key;
					// Modifier with name and value
				} else {
						return name + settings.mod + key + settings.modValue + value;
					}
			}));
		}

		// Add states
		if (states) {
			Object.keys(states).forEach(function (prefix) {
				var statesByPrefix = states[prefix];

				classes = classes.concat(Object.keys(statesByPrefix).filter(function (key) {
					return statesByPrefix[key];
				}).map(function (key) {
					return prefix + key;
				}));
			});
		}

		// Add namespace
		if (settings.ns) {
			classes = classes.map(function (className) {
				return settings.ns + className;
			});
		}

		// Add mixes
		// Don't do it before adding namespace! @see https://github.com/albburtsev/bem-cn/issues/32
		if (mixes) {
			classes = classes.concat(normilizeMixes(mixes));
		}

		// Resolve class name from classMap
		if (settings.classMap) {
			classes = classes.map(function (className) {
				return settings.classMap[className] || className;
			});
		}

		return classes.join(' ');
	}

	/**
	 * Adds new mixes to context and returns selector
	 * @param {Object} settings
	 * @param {Object} context
	 * @param {*} mixes
	 * @return {Function}
	 */
	function mix(settings, context) {
		// Copy context object for new selector generator
		var copied = (0, _helpers.assign)({}, context);

		// Copy and update list of mixes

		for (var _len = arguments.length, mixes = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			mixes[_key - 2] = arguments[_key];
		}

		copied.mixes = (copied.mixes || []).concat(mixes);

		return selector(settings, copied);
	}

	/**
	 * Adds new states to context and returns selector
	 * @param {Object} settings
	 * @param {Object} context
	 * @param {String} prefix One of available prefixes `is-` or `has-`
	 * @param {Object} states
	 * @return {Function}
	 */
	function state(settings, context, prefix) {
		// Copy context object for new selector generator
		var copied = (0, _helpers.assign)({}, context),
		    copiedState = (0, _helpers.assign)({}, copied.states || {});

		// Copy and update object with states

		for (var _len2 = arguments.length, states = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
			states[_key2 - 3] = arguments[_key2];
		}

		copiedState[prefix] = _helpers.assign.apply(undefined, [{}, copiedState[prefix] || {}].concat(states));
		copied.states = copiedState;

		return selector(settings, copied);
	}

	/**
	 * Selector generator, self-curried function
	 * @param {Object} settings
	 * @param {String} [settings.ns = ''] Namespace for all classes
	 * @param {String} [settings.el = '__'] Delimiter before element name
	 * @param {String} [settings.mod = '_'] Delimiter before modifier name
	 * @param {String} [settings.modValue = '_'] Delimiter before modifier value
	 * @param {Object} [settings.classMap = null]
	 * @param {Object} context
	 * @param {String} context.name Block or element name
	 * @param {Object} [context.mods] Store with all modifiers
	 * @param {Object} [context.states] Store with all states
	 * @param {Array} [context.mixes] List of external classes
	 * @return {Function}
	 */
	function selector(settings, context) {
		function inner() {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			// Call without arguments, time to return class names as a string
			if (!args.length) {
				return toString(settings, context);
			}

			// Don't forget to copy context object for new selector generator
			var copied = (0, _helpers.assign)({}, context);

			// Add new elements and modifiers to the context
			copied = args.reduce(function (copied, arg) {
				// New element found
				if (typeof arg === 'string') {
					copied.name += settings.el + arg;
					// New modifier found
				} else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
						copied.mods = (0, _helpers.assign)(copied.mods || {}, arg);
					}

				return copied;
			}, copied);

			return selector(settings, copied);
		}

		inner.mix = mix.bind(null, settings, context);
		inner.has = state.bind(null, settings, context, HAS_PREFIX);
		inner.state = inner.is = state.bind(null, settings, context, IS_PREFIX);
		inner.toString = inner.valueOf = toString.bind(null, settings, context);
		inner.split = function () {
			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			return String.prototype.split.apply(toString(settings, context), args);
		};

		return inner;
	}

	/**
	 * Creates new BEM block
	 * @param {String} name
	 * @return {Function} Selector generator
	 */
	function block(name) {
		if (typeof name !== 'string') {
			throw new Error(_constants.ERROR_BLOCK_NAME_TYPE);
		}

		name = (0, _helpers.trim)(name);

		if (!name) {
			throw new Error(_constants.ERROR_BLOCK_NAME_EMPTY);
		}

		// It is easy to define default settings here
		return selector(settings, { name: name });
	}

	/**
	 * Updates settings object
	 * @param  {Object} custom New custom settings
	 */
	block.setup = function () {
		var custom = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		(0, _helpers.assign)(settings, custom);
	};

	/**
	 * Sets default settings
	 */
	block.reset = function () {
		(0, _helpers.assign)(settings, defaultSettings);
	};

	exports.default = block;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ERROR_BLOCK_NAME_TYPE = exports.ERROR_BLOCK_NAME_TYPE = 'Block name should be a string';
	var ERROR_BLOCK_NAME_EMPTY = exports.ERROR_BLOCK_NAME_EMPTY = 'Block name should be non-empty';

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Removes whitespaces from ends of a string
	 * @param {String} string Source string
	 * @return {String}
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	 */
	var trim = exports.trim = function trim(string) {
	  return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};

	/**
	 * Copies all enumerable properties from given source objects to target
	 * @param {Object} [target]
	 * @param {Object} [source]
	 * @return {Object}
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	 */
	var assign = exports.assign = function assign() {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  var target = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  for (var i = 0; i < args.length; i++) {
	    var source = args[i];
	    for (var key in source) {
	      if (source.hasOwnProperty(key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }
/******/ ])
});
;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(35)
  , toIndex   = __webpack_require__(34);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(18)
  , hide      = __webpack_require__(23)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
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
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(26)
  , createDesc = __webpack_require__(31);
module.exports = __webpack_require__(0) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(1)(function(){
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(29)
  , gOPS     = __webpack_require__(27)
  , pIE      = __webpack_require__(30)
  , toObject = __webpack_require__(36)
  , IObject  = __webpack_require__(6)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(1)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(15)
  , IE8_DOM_DEFINE = __webpack_require__(24)
  , toPrimitive    = __webpack_require__(37)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(22)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(16)(false)
  , IE_PROTO     = __webpack_require__(32)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(28)
  , enumBugKeys = __webpack_require__(20);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys')
  , uid    = __webpack_require__(38);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(7)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(5);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(21);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(25)});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This module is an entry point when `vue-bem-cn` is just dropped into the browser.
// This is required so that users work with `window.vueBemCn`, not `window.vueBemCn.default`
// https://gist.github.com/iamakulov/966b91c0fc6363a16ff0650b51fb991b
module.exports = __webpack_require__(9).default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-bem-cn.umd.js.map