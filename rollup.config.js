const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const filesize = require('rollup-plugin-filesize');
const progress = require('rollup-plugin-progress');

const builder = plugins => rollup.rollup({
  input: 'src/main.js',
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
  ].concat(plugins || [], progress({ clearLine: false }), filesize()),
});


builder([uglify()])
  .then((bundle) => {
    bundle.write({
      format: 'umd',
      file: './dist/vue-bem-cn.umd.min.js',
      name: 'vueBemCn',
      sourcemap: true,
    });
  });

builder()
  .then((bundle) => {
    bundle.write({
      format: 'es',
      file: './dist/vue-bem-cn.es6.js',
      sourcemap: true,
    });
  });
