import { blocks, elements, delimiters, delimitersTest } from './testingEntitys';
import bemNames from '../src/bem-cn/bem-names';

describe('Block', () => {
  Object.keys(blocks).forEach((item) => {
    test(item, () => {
      expect(bemNames(blocks[item])).toBe(item);
    });
  });
});

describe('Element', () => {
  Object.keys(elements).forEach((item) => {
    test(item, () => {
      expect(bemNames(elements[item])).toBe(item);
    });
  });
});

describe('Delimiters', () => {
  Object.keys(delimitersTest).forEach((item) => {
    test(item, () => {
      expect(bemNames(delimitersTest[item], delimiters)).toBe(item);
    });
  });
});
