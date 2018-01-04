import { isString, isPObject, hyphenate } from '../src/utils';

describe('isString', () => {
  test('Expected false for undefined', () => {
    expect(isString(undefined)).not.toBeTruthy();
  });

  test('Expected false for numbers', () => {
    expect(isString(123)).not.toBeTruthy();
  });

  test('Expected false for Object', () => {
    expect(isString({})).not.toBeTruthy();
  });

  test('Expected true for string', () => {
    expect(isString('Hello!')).toBeTruthy();
  });
});

describe('isPObject', () => {
  test('Expected false for empty object', () => {
    expect(isPObject({})).not.toBeTruthy();
  });

  test('Expected false for null', () => {
    expect(isPObject(null)).not.toBeTruthy();
  });

  test('Expected false for arrays', () => {
    expect(isPObject([])).not.toBeTruthy();
  });

  test('Expected true for object', () => {
    expect(isPObject({ foo: 'bar' })).toBeTruthy();
  });
});

describe('hyphenate', () => {
  test('Expected equal "has-focus" for "has-focus" ', () => {
    expect(hyphenate('has-focus')).toBe('has-focus');
  });
  test('Expected equal "hasFocus" for "has-focus" ', () => {
    expect(hyphenate('hasFocus')).toBe('has-focus');
  });
});
