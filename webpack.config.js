var path = require('path');

module.exports = {
  target: 'node',
  entry: {
    get: ['./boostrap', './src/get.js'],
    distTagsGet: ['./boostrap', './src/dist-tags/get.js'],
    distTagsPut: ['./boostrap', './src/dist-tags/put.js'],
    distTagsDelete: ['./boostrap', './src/dist-tags/delete.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: /src/,
      exclude: /node_modules/,
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
};
