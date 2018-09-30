import { isPObject, isString, isNumber } from '../utils';

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
export default function bemNames(entitys, delimiters) {
  const names = entitys || {};
  let resultString = (delimiters.ns || '') + names.block;

  if (names.el) resultString += delimiters.el + names.el;

  if (isPObject(names.mods)) {
    resultString += Object.keys(names.mods).reduce((prev, name) => {
      const val = names.mods[name];
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
  return resultString + (isString(names.mixin) ? ' ' + names.mixin : '');
}
