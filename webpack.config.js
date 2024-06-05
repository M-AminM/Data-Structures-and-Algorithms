const path = require("path");

const config = {
  mode: "development",
  entry: "/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
      },
    ],
  },
};

module.exports = config;
