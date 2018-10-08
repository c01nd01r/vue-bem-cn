import { blocks, elements, block, delimiters, delimitersTest, hyphenate } from './testingEntitys';
import { DEFAULT_DELIMITERS, DEFAULT_CONFIG } from '../src/globals';
import bemCn from '../src/bem-cn/index';

const config = {
  ...DEFAULT_CONFIG,
  delimiters: {
    ...DEFAULT_DELIMITERS,
  },
};

describe('Block', () => {
  const b = bemCn(block, config);
  Object.keys(blocks).forEach((item) => {
    test(item, () => {
      expect(b(blocks[item].mods, blocks[item].mixin)).toBe(item);
    });
  });

  test('BlockName BlockName--mod, when elem = false', () => {
    const val = { el: false, mods: { mod: 'val' } };
    expect(b(val.el, val.mods)).toBe('BlockName BlockName--mod-val');
  });
});

describe('Elements', () => {
  const b = bemCn(block, config);

  Object.keys(elements).forEach((item) => {
    test(item, () => {
      expect(b(elements[item].el, elements[item].mods, elements[item].mixin)).toBe(item);
    });
  });
});

describe('Delimiters', () => {
  const b = bemCn(delimiters.ns + block, { ...config, delimiters });

  Object.keys(delimitersTest).forEach((item) => {
    test(item, () => {
      expect(b(delimitersTest[item].el, delimitersTest[item].mods, delimitersTest[item].mixin))
        .toBe(item);
    });
  });
});

describe('Hyphenate', () => {
  const b = bemCn('block-name', { ...config, hyphenate: true });

  Object.keys(hyphenate).forEach((item) => {
    test(item, () => {
      expect(b(hyphenate[item].mods || hyphenate[item].el)).toBe(item);
    });
  });
});
