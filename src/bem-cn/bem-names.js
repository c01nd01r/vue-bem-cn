import { isPObject, isString, isNumber } from '../utils';
import { DEFAULT_DELIMITERS } from '../globals';

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
  const delims = {
    ...DEFAULT_DELIMITERS,
    ...delimiters,
  };
  let resultString = (delims.ns || '') + names.block;

  if (names.el) resultString += delims.el + names.el;

  if (isPObject(names.mods)) {
    resultString += Object.keys(names.mods).reduce((prev, name) => {
      const val = names.mods[name];
      /* eslint-disable no-param-reassign */
      if (val === true) {
        prev += ' ' + resultString + delims.mod + name;
      } else if (isString(val) || isNumber(val)) {
        prev += ' ' + resultString + delims.mod + name + delims.modVal + val;
      }
      /* eslint-enable no-param-reassign */

      return prev;
    }, '');
  }
  return resultString + (isString(names.mixin) ? ' ' + names.mixin : '');
}
