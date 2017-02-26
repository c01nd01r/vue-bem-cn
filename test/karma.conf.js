var webpackConfig = require('./webpack.config');

module.exports = function exp(config) {
  config.set({
    files: [
      './spec/*.js',
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      './spec/*.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    browsers: ['PhantomJS'],
    autoWatch: false,
    singleRun: true,
  });
};
