// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace 'index.js' with the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace 'dist' with the output directory of your build
    filename: 'bundle.js', // Replace 'bundle.js' with the desired output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
