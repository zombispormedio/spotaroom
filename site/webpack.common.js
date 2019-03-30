const path = require('path');
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
      title: 'Spotaroom'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.EXECUTOR': JSON.stringify(process.env.EXECUTOR || 'graphql'),
      'process.env.GATEWAY_URL': JSON.stringify(process.env.GATEWAY_URL)
    })
  ]
};
