/* eslint-disable quote-props */
export const block = 'BlockName';
export const el = 'elementName';
export const delimiters = {
  ns: 'ns**',
  el: '++',
  mod: '==',
  modVal: '~',
};

export const blocks = {
  [block]: { block },
  [`${block} ${block}--mod`]: { block, mods: { mod: true } },
  [`${block} ${block}--mod-val`]: { block, mods: { mod: 'val' } },
  [`${block} ${block}--mod-123`]: { block, mods: { mod: 123 } },
  [`${block} ${block}--mod-val ${block}--modbool`]: {
    block,
    mods: { mod: 'val', modbool: true, 'some-mod': false },
  },
  [`${block} mix`]: { block, mixin: 'mix' },
  [`${block} ${block}--mod mix`]: { block, mods: { mod: true }, mixin: 'mix' },
};

export const elements = {
  [`${block}__${el}`]: { block, el },
  [`${block}__${el} ${block}__${el}--mod`]: { block, el, mods: { mod: true } },
  [`${block}__${el} ${block}__${el}--mod-val`]: { block, el, mods: { mod: 'val' } },
  [`${block}__${el} ${block}__${el}--mod-123`]: { block, el, mods: { mod: 123 } },
  [`${block}__${el} ${block}__${el}--mod-val ${block}__${el}--modbool`]: {
    block,
    el,
    mods: { mod: 'val', modbool: true, 'some-mod': false },
  },
  [`${block}__${el} mix`]: { block, el, mixin: 'mix' },
  [`${block}__${el} ${block}__${el}--mod-val mix`]: {
    block,
    el,
    mods: { mod: 'val' },
    mixin: 'mix',
  },
};

export const delimitersTest = {
  [`ns**${block}++${el} ns**${block}++${el}==mod~val ns**${block}++${el}==modbool`]: {
    block: delimiters.ns + block,
    el,
    mods: {
      mod: 'val',
      modbool: true,
      'some-mode': false,
    },
  },
};

export const hyphenate = {
  'block-name': { block },
  'block-name block-name--has-mod': { block, mods: { hasMod: true } },
  'block-name__element-name': { block, el },
};
