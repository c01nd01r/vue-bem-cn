/* eslint-disable quote-props */
export const block = 'block';
export const el = 'elem';
export const delimiters = {
  ns: 'ns**',
  el: '++',
  mod: '==',
  modVal: '~',
};

export const blocks = {
  'block': { block },
  'block block--mod': { block, mods: { mod: true } },
  'block block--mod-val': { block, mods: { mod: 'val' } },
  'block block--mod-123': { block, mods: { mod: 123 } },
  'block block--mod-val block--modbool': {
    block,
    mods: { mod: 'val', modbool: true, 'some-mod': false },
  },
  'block mix': { block, mixin: 'mix' },
  'block block--mod mix': { block, mods: { mod: true }, mixin: 'mix' },
};

export const elements = {
  'block__elem': { block, el },
  'block__elem block__elem--mod': { block, el, mods: { mod: true } },
  'block__elem block__elem--mod-val': { block, el, mods: { mod: 'val' } },
  'block__elem block__elem--mod-123': { block, el, mods: { mod: 123 } },
  'block__elem block__elem--mod-val block__elem--modbool': {
    block,
    el,
    mods: { mod: 'val', modbool: true, 'some-mod': false },
  },
  'block__elem mix': { block, el, mixin: 'mix' },
  'block__elem block__elem--mod-val mix': {
    block,
    el,
    mods: { mod: 'val' },
    mixin: 'mix',
  },
};

export const delimitersTest = {
  'ns**block++elem ns**block++elem==mod~val ns**block++elem==modbool': {
    block,
    el,
    mods: {
      mod: 'val',
      modbool: true,
      'some-mode': false,
    },
  },
};

export const hyphenate = {
  'block block--has-mod': { block, mods: { hasMod: true } },
};

export default {
  block,
  el,
  blocks,
  elements,
  delimiters,
  hyphenate,
};
