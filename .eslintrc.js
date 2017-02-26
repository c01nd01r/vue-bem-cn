module.exports = {
  root: true,
  formatter: require('eslint-friendly-formatter'),
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  plugins: [
    "chai-expect"
  ],
  rules: {
    "no-unused-expressions": 0,
    "chai-expect/missing-assertion": 2,
  },
  env: {
    mocha: true,
  }
}
