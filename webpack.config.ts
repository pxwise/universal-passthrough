var webpack = require('webpack');
var path = require('path');

var commonConfig = {
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      root('./src'),
      {}
    )
  ]
};

var clientConfig = {
  target: 'web',
  entry: {
    "index.browser": "./index.browser"
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js"
  },
  externals: [
    /^@angular(\\|\/)core/,
    /^rxjs\//
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};

var serverConfig = {
  target: 'node',
  entry: {
    "index.server": "./index.server"
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js",
    libraryTarget: 'commonjs2'
  },
  externals: [
    /^@angular(\\|\/)core/,
    /^rxjs\//
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};

var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, commonConfig, clientConfig),

  // Server
  webpackMerge({}, commonConfig, serverConfig)
];

function includeClientPackages(packages) {
  return function(context, request, cb) {
    if (packages && packages.indexOf(request) !== -1) {
      return cb();
    }
    return checkNodeImport(context, request, cb);
  };
}
// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
