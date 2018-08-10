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
  return val && typeof val === 'string' && val.length > 0;
};
var isPObject = function isPObject(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null && val.constructor === Object && Object.keys(val).length > 0;
};

var hyphenate = function hyphenate(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
};
var isNumber = function isNumber(val) {
  return typeof val === 'number' && isFinite(val);
};

/**
 * Create String from BEM entitys
 * @param {Object} entitys BEM entitys
 * @param {String} entitys.block Block
 * @param {String} [entitys.el] Element
 * @param {Object<string>} [entitys.mods] Modifiers
 * @param {String} [entitys.mixin] Mixin
 * @param {Object<string>} delimiters Delimiters for BEM entitys
 * @returns {String}
 */
function bemNames(entitys, delimiters) {
  var resultString = '';
  var names = entitys || { mods: {}, mixin: '' };
  var delims = _extends({
    ns: '',
    el: '__',
    mod: '--',
    modVal: '-'
  }, delimiters);
  var mixin = isString(names.mixin) ? ' ' + names.mixin : '';

  if (!names.block) return '';
  resultString = delims.ns ? delims.ns + names.block : names.block;

  if (names.el) resultString += delims.el + names.el;

  if (isPObject(names.mods)) {
    resultString += Object.keys(names.mods).reduce(function (prev, name) {
      var val = names.mods[name];
      /* eslint-disable no-param-reassign */
      if (val === true) {
        prev += ' ' + resultString + delims.mod + name;
      } else if (isString(val) || isNumber(val)) {
        prev += ' ' + resultString + delims.mod + name + delims.modVal + names.mods[name];
      }
      /* eslint-enable no-param-reassign */

      return prev;
    }, '');
  }
  return resultString + mixin;
}

function bemCn(block) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { delimiters: {} };

  var options = _extends({
    hyphenate: false
  }, opt, {
    delimiters: _extends({}, opt.delimiters)
  });
  if (!isString(block)) return '';

  return function entitys(elem, mods, mix) {
    var resultObj = {
      block: block,
      el: '',
      mods: {},
      mixin: ''
    };

    if (isPObject(mods)) resultObj.mods = mods;

    if (isString(elem)) {
      resultObj.el = elem;
    } else if (isPObject(elem)) {
      resultObj.mods = elem;
    }

    if (isString(mods)) {
      resultObj.mixin = resultObj.mixin.length > 0 ? resultObj.mixin + ' ' + mods : resultObj.mixin + mods;
    }
    if (isString(mix)) {
      resultObj.mixin = resultObj.mixin.length > 0 ? resultObj.mixin + ' ' + mix : resultObj.mixin + mix;
    }

    if (options.hyphenate) {
      return hyphenate(bemNames(resultObj, options.delimiters));
    }

    return bemNames(resultObj, options.delimiters);
  };
}

var vuePlugin = {
  install: function install(Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { delimiters: {} };

    var cfg = _extends({
      hyphenate: false,
      methodName: 'b'
    }, config, {
      delimiters: _extends({
        ns: '',
        el: '__',
        mod: '--',
        modVal: '-'
      }, config.delimiters)
    });

    Vue.mixin({
      created: function created() {
        var block = this.$options.block || this.$options.name;
        var generator = null;

        if (typeof block !== 'string') return;

        generator = bemCn(block, cfg);
        this[cfg.methodName] = function () {
          return generator.apply(undefined, arguments);
        };
      }
    });
  }
};

export default vuePlugin;
//# sourceMappingURL=vue-bem-cn.es6.js.map
