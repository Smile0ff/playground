const { resolve, join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = resolve('.');

const config = {
  entry: {
    app: join(ROOT, 'src/app.js')
  },
  output: {
    path: join(ROOT, 'build'),
    publicPath: '/',
    filename: '[name].bundle.dev.js'
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: [
          resolve(__dirname, '../src/assets/css/base.css')
        ],
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: 'webpack/postcss.config.js' },
              sourceMap: true
            }
          },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.scss$/,
        exclude: [
          resolve(__dirname, '../src/assets/css/base.css')
        ],
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: 'webpack/postcss.config.js' },
              sourceMap: true
            }
          },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      template: join(ROOT, 'src/index.html'),
      filename: 'index.html'
    })
  ],
  devtool: 'source-map'
}

module.exports = config;
