const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const outputDir = 'build';

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, outputDir)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      filename: './index.html',
      appMountId: 'root',
      title: 'Spotaroom',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, user-scalable=no'
        }
      ],
      links: [
        {
          href:
            'https://fonts.googleapis.com/css?family=Luckiest+Guy|Open+Sans:400,600,700',
          rel: 'stylesheet'
        }
      ]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PROVIDER': JSON.stringify(process.env.PROVIDER || 'graphql'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL)
    })
  ]
};
