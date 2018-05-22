module.exports = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff2)$/,
        include,
        exclude,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]',
              ...options
            }
          }
        ]
      }
    ]
  }
});
