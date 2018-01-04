import { isString, isPObject, hyphenate } from '../utils';
import bemNames from './bem-names';

export default function bemCn(block, opt = { delimiters: {} }) {
  const options = {
    hyphenate: false,
    ...opt,
    delimiters: {
      ...opt.delimiters,
    },
  };
  if (!isString(block)) return '';

  return function entitys(elem, mods, mix) {
    const resultObj = {
      block,
      el: '',
      mods: {},
      mixin: '',
    };

    if (isPObject(mods)) resultObj.mods = mods;

    if (isString(elem)) {
      resultObj.el = elem;
    } else if (isPObject(elem)) {
      resultObj.mods = elem;
    }

    if (isString(mods)) {
      resultObj.mixin =
        resultObj.mixin.length > 0 ? `${resultObj.mixin} ${mods}` : resultObj.mixin + mods;
    }
    if (isString(mix)) {
      resultObj.mixin =
        resultObj.mixin.length > 0 ? `${resultObj.mixin} ${mix}` : resultObj.mixin + mix;
    }

    if (options.hyphenate) {
      return hyphenate(bemNames(resultObj, options.delimiters));
    }

    return bemNames(resultObj, options.delimiters);
  };
}
