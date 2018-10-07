import { isString, isPObject, hyphenate } from '../utils';
import bemNames from './bem-names';

export default function bemCn(block, options) {
  return function entities(elem, mods, mix) {
    const resultObj = {
      block,
      el: '',
      mods: {},
      mixin: '',
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
      resultObj.mixin += resultObj.mixin ? ` ${mix}` : mix;
    }

    const bemClasses = bemNames(resultObj, options.delimiters);

    return options.hyphenate
      ? hyphenate(bemClasses)
      : bemClasses;
  };
}
