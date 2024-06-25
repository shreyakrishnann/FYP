const path = require('path');

module.exports = {
  entry: 'C:/GitHub_Repository/FYP/src/index.js', // Ensure this path is correct relative to the webpack.config.js file
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'), // This should point to the build directory
  },
  mode: 'development', // or 'production'
};
