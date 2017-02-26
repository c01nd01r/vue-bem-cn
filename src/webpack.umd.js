// This module is an entry point when `vue-bem-cn` is just dropped into the browser.
// This is required so that users work with `window.vueBemCn`, not `window.vueBemCn.default`
// https://gist.github.com/iamakulov/966b91c0fc6363a16ff0650b51fb991b
module.exports = require('./index.js').default;
