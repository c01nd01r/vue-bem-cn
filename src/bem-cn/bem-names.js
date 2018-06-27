import { isPObject, isString } from '../utils';

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
  let resultString = '';
  const names = entitys || { mods: {}, mixin: '' };
  const delims = {
    ns: '',
    el: '__',
    mod: '--',
    modVal: '-',
    ...delimiters,
  };
  const mixin = isString(names.mixin) ? ' ' + names.mixin : '';

  if (!names.block) return '';
  resultString = delims.ns ? delims.ns + names.block : names.block;

  if (names.el) resultString += delims.el + names.el;

  if (isPObject(names.mods)) {
    resultString += Object.keys(names.mods).reduce((prev, name) => {
      const val = names.mods[name];
      /* eslint-disable no-param-reassign */
      if (val === true) {
        prev += ' ' + resultString + delims.mod + name;
      } else if (isString(val) || typeof(val) === 'number') {
        prev += ' ' + resultString + delims.mod + name + delims.modVal + names.mods[name];
      }
      /* eslint-enable no-param-reassign */

      return prev;
    }, '');
  }
  return resultString + mixin;
}
