const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.json",
  module: {
    rules: [
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [require.resolve("@babel/plugin-transform-react-jsx")],
            },
          },
          {
            loader: require.resolve("./lib/loader/json-loader"),
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  devtool: false,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
