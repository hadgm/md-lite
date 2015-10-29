// Karma configuration
// Generated on Mon Sep 28 2015 16:00:21 GMT+0700 (ICT)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'bundle.spec.js',
    ],

    exclude: [],

    preprocessors: {
      'bundle.spec.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: 'style!css',
          },
          {
            test: /\.js$/,
            loader: 'babel?optional[]=runtime',
            exclude: /node_modules/,
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file',
          }, {
            test: /\.tpl.html$/,
            loader: 'raw',
          }, {
            test: /index.html$/,
            loader: 'file?name=[name].[ext]',
          }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
          },
        ],

        preLoaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules\/|\.spec.js$)/,
            loader: 'isparta-instrumenter',
          },
        ],
      },
    },

    webpackServer: {
      noInfo: true,
    },

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      type: 'html', //produces a html document after code is run
      dir: 'coverage/', //path to created html doc
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-sourcemap-loader',
    ],
  });
};
