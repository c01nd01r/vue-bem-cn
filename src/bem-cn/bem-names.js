import { isString, isNumber } from '../utils';

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
export default function bemNames(entities, delimiters) {
  let resultString = entities.block;

  if (entities.el) resultString += delimiters.el + entities.el;

  if (entities.mods) {
    resultString += Object.keys(entities.mods).reduce((prev, name) => {
      const val = entities.mods[name];
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

  return resultString + (entities.mixin ? ` ${entities.mixin}` : '');
}
