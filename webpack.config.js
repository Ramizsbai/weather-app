module.exports = {
    module: {
      rules: [
        {
          publicPath: "/webpack-demo/",
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: ["file-loader"]
        }
      ],
      output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
      }

    }
  };