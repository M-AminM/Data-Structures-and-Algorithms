const path = require("path");

const config = {
  mode: "development",
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
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
