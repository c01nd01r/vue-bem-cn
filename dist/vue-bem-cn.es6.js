var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
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

var isString = function isString(val) {
  return val && typeof val === 'string';
};
var isPObject = function isPObject(val) {
  return !!(val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.constructor === Object && Object.keys(val).length);
};

var hyphenate = function hyphenate(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
};

// eslint-disable-next-line no-restricted-globals
var isNumber = function isNumber(val) {
  return typeof val === 'number' && isFinite(val);
};

/**
 * Create String from BEM entitys
 * @param {Object} entities BEM entitys
 * @param {String} entities.block Block
 * @param {String} [entities.el] Element
 * @param {Object<string>} [entities.mods] Modifiers
 * @param {String} [entities.mixin] Mixin
 * @param {Object<string>} delimiters Delimiters for BEM entitys
 * @returns {String}
 */
function bemNames(entities, delimiters) {
  var resultString = entities.block;

  if (entities.el) resultString += delimiters.el + entities.el;

  if (entities.mods) {
    resultString += Object.keys(entities.mods).reduce(function (prev, name) {
      var val = entities.mods[name];
      /* eslint-disable no-param-reassign */
      if (val === true) {
        prev += ' ' + resultString + delimiters.mod + name;
      } else if (isString(val) || isNumber(val)) {
        prev += ' ' + resultString + delimiters.mod + name + delimiters.modVal + val;
      }
      /* eslint-enable no-param-reassign */

      return prev;
    }, '');
  }

  return resultString + (entities.mixin ? ' ' + entities.mixin : '');
}

function bemCn(block, options) {
  return function entities(elem, mods, mix) {
    var resultObj = {
      block: block,
      el: '',
      mods: {},
      mixin: ''
    };

    if (!elem && !mods && !mix) {
      return block;
    }

    if (isPObject(mods)) {
      resultObj.mods = mods;
    } else if (isString(mods)) {
      resultObj.mixin += mods;
    }

    if (isString(elem)) {
      resultObj.el = elem;
    } else if (isPObject(elem)) {
      resultObj.mods = elem;
    }

    if (isString(mix)) {
      resultObj.mixin += resultObj.mixin ? ' ' + mix : mix;
    }

    var bemClasses = bemNames(resultObj, options.delimiters);

    return options.hyphenate ? hyphenate(bemClasses) : bemClasses;
  };
}

var DEFAULT_DELIMITERS = {
  ns: '',
  el: '__',
  mod: '--',
  modVal: '-'
};

var DEFAULT_CONFIG = {
  hyphenate: false,
  methodName: 'b'
};

var vuePlugin = {
  install: function install(Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { delimiters: {} };

    var cfg = _extends({}, DEFAULT_CONFIG, config, {
      delimiters: _extends({}, DEFAULT_DELIMITERS, config.delimiters)
    });

    Vue.mixin({
      created: function created() {
        var block = this.$options.block || this.$options.name;
        var nsBlock = cfg.delimiters.ns + block;
        var generator = null;

        if (!isString(block)) return;

        generator = bemCn(cfg.hyphenate ? hyphenate(nsBlock) : nsBlock, cfg);

        this[cfg.methodName] = function () {
          return generator.apply(undefined, arguments);
        };
      }
    });
  }
};

export default vuePlugin;
//# sourceMappingURL=vue-bem-cn.es6.js.map
