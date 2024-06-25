const path = require('path');

module.exports = {
  entry: './src/index.js',  // Adjust the entry point to your project's structure
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
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
  mode: 'development',  // or 'production'
};
