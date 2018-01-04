import { blocks, elements, block, delimiters, delimitersTest, hyphenate } from './testingEntitys';
import bemCn from '../src/bem-cn/index';

describe('Block', () => {
  const b = bemCn(block);
  Object.keys(blocks).forEach((item) => {
    test(item, () => {
      expect(b(blocks[item].mods, blocks[item].mixin)).toBe(item);
    });
  });

  test('block block--mod, when elem = false', () => {
    const val = { el: false, mods: { mod: 'val' } };
    expect(b(val.el, val.mods)).toBe('block block--mod-val');
  });
});

describe('Elements', () => {
  const b = bemCn(block);

  Object.keys(elements).forEach((item) => {
    test(item, () => {
      expect(b(elements[item].el, elements[item].mods, elements[item].mixin)).toBe(item);
    });
  });
});

describe('Delimiters', () => {
  const b = bemCn(block, { delimiters });

  Object.keys(delimitersTest).forEach((item) => {
    test(item, () => {
      expect(b(delimitersTest[item].el, delimitersTest[item].mods, delimitersTest[item].mixin)).toBe(item);
    });
  });
});

describe('Hyphenate', () => {
  const b = bemCn(block, { hyphenate: true });

  Object.keys(hyphenate).forEach((item) => {
    test(item, () => {
      expect(b(hyphenate[item].mods)).toBe(item);
    });
  });
});
