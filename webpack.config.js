const merge = require('webpack-merge');

module.exports = (env, { mode = 'developent' }) => {
  const common = require('./config/webpack.common.js');

  const config =
    mode === 'production'
      ? require('./config/webpack.production.js')
      : require('./config/webpack.development.js');

  return merge({ mode, context: __dirname }, common, config);
};
