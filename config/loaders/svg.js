module.exports = ({ include, exclude = /node_modules/, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
});
