module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /\/dist\//, enforce: 'pre' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /\/node_modules\// },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
};
