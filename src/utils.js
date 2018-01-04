export const isString = val => val && typeof val === 'string' && val.length > 0;
export const isPObject = val =>
  val &&
  typeof val === 'object' &&
  val !== null &&
  val.constructor === Object &&
  Object.keys(val).length > 0;

export const hyphenate = str => str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
