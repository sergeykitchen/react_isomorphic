/* eslint-env node */
const path = require('path');

module.exports = {
  stats: 'errors-warnings',
  entry: ['./app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx/],
        include: path.resolve(__dirname, 'app'),
        use: ['babel-loader'],
      },
     
    ],
  },
};
