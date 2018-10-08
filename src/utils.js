export const isString = val => val && typeof val === 'string';
export const isPObject = val =>
  !!(val && typeof val === 'object' && val.constructor === Object && Object.keys(val).length);

export const hyphenate = str => str.replace(/\B([A-Z])/g, '-$1').toLowerCase();

// eslint-disable-next-line no-restricted-globals
export const isNumber = val => typeof val === 'number' && isFinite(val);
