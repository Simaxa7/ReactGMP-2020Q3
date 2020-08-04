const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV;
const isProduction = mode === 'production';

const src = `${__dirname}/src`;

module.exports = {
  mode: mode,
  entry: [
    `${src}/index.jsx`,
  ],
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
  },
  devtool: !isProduction ? 'source-map' : 'none',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: isProduction },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                // eslint-disable-next-line global-require
                require('autoprefixer')({
                  overrideBrowserslist: ['last 2 versions'],
                }),
              ],
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${src}/index.html`,
      filename: `./index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].css' : '[name].[hash].css',
      chunkFilename: isProduction ? '[id].css' : '[id].[hash].css',
    }),
    new CleanWebpackPlugin(),
  ],
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
  devServer: {
    port: 8080,
    open: true,
  },
};

