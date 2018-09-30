import { blocks, elements, delimiters, delimitersTest } from './testingEntitys';
import bemNames from '../src/bem-cn/bem-names';
import { DEFAULT_DELIMITERS } from '../src/globals';

describe('Block', () => {
  Object.keys(blocks).forEach((item) => {
    test(item, () => {
      expect(bemNames(blocks[item], DEFAULT_DELIMITERS)).toBe(item);
    });
  });
});

describe('Element', () => {
  Object.keys(elements).forEach((item) => {
    test(item, () => {
      expect(bemNames(elements[item], DEFAULT_DELIMITERS)).toBe(item);
    });
  });
});

describe('Delimiters', () => {
  Object.keys(delimitersTest).forEach((item) => {
    test(item, () => {
      expect(bemNames(delimitersTest[item], { ...DEFAULT_DELIMITERS, ...delimiters })).toBe(item);
    });
  });
});
