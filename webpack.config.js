const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const { SwcMinifyWebpackPlugin } = require("swc-minify-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    filename: "bundle-[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new MiniCssPlugin({
      filename: "[name]-[fullhash].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new SwcMinifyWebpackPlugin()],
  },
  devServer: {
    port: 5555,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
              "@babel/preset-env",
              {
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1",
                },
              },
            ],
            ],
          },
        },
      },
    ],
  },
};
