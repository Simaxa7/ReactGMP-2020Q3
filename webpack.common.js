const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    `${__dirname}/src/index.jsx`,
  ],
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        sourceMap: true,
        uglifyOptions: {
          compress: {},
          mangle: true,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
