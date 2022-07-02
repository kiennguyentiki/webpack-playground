const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
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
