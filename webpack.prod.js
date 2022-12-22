const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

const config = require("./webpack.config.js");

module.exports = merge(config(), {
  mode: "production",
  devtool: false,
  output: {
    publicPath: "/mytheresa/",
  },
  plugins: [
    new DuplicatePackageCheckerPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      algorithm: "gzip",
      filename: "[path][base][fragment].gz",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new Dotenv({
      path: "./.env.production",
      ignoreStub: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/locales", to: "locales/" }, //to the dist root directory
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
