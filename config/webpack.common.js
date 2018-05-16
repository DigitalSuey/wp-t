const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const javascriptLoader = require('./loaders/javascript');
const htmlLoader = require('./loaders/html');

module.exports = merge([htmlLoader(), javascriptLoader()]);
