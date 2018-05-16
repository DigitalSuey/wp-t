// Setup html-webpack-plugin and html-loader.
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        include,
        exclude,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
});

// exports.htmlPlugins = () => ({
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: './src/index.html',
//       filename: './index.html'
//     })
//   ]
// });
