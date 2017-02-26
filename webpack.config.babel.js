import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/webpack.umd.js',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'vueBemCn',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /\/node_modules\//, include, enforce: 'pre' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /\/node_modules\//, include },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
};
