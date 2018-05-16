// Setup mini-css-extract-plugin to extract CSS to a file.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.development = ({
  include,
  exclude = /node_modules/,
  options
} = {}) => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include,
        exclude,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options
          },
          'sass-loader'
        ]
      }
    ]
  }
});

exports.production = ({
  include,
  exclude = /node_modules/,
  options = { minimize: true }
} = {}) => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include,
        exclude,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[hash].css',
      chunkFilename: '[id].css'
    })
  ]
});
