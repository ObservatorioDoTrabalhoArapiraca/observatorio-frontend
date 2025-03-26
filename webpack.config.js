const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './src/ts/scripts.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        FACEBOOK_URL: process.env.FACEBOOK_URL,
        TWITTER_URL: process.env.TWITTER_URL,
        INSTAGRAM_URL: process.env.INSTAGRAM_URL
      })
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};