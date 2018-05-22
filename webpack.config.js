const merge = require('webpack-merge');
const path = require('path');

module.exports = (env, { mode = 'developent' }) => {
  const common = require('./config/webpack.common.js');

  const config =
    mode === 'production'
      ? require('./config/webpack.production.js')
      : require('./config/webpack.development.js');

  return merge(
    {
      mode,
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
      }
    },
    common,
    config
  );
};
