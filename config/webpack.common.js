const merge = require('webpack-merge');

const htmlLoader = require('./loaders/html');
const imageLoader = require('./loaders/image');
const javascriptLoader = require('./loaders/javascript');
const svgLoader = require('./loaders/svg');

module.exports = merge([
  htmlLoader(),
  javascriptLoader(),
  imageLoader({}, { exclude: /index\.html$/ }, {}),
  svgLoader()
]);
