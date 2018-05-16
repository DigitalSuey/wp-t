// Set up babel-loader
module.exports = ({ include, exclude = /node_modules/ } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include,
        exclude,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
});
