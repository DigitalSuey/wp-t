const merge = require('webpack-merge');
const stylesLoader = require('./loaders/styles');

module.exports = merge([stylesLoader.production()]);
