const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "production",
  devtool: false,
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
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production",
        APP_URL: JSON.stringify(process.env.APP_URL),
        API_TOKEN: JSON.stringify(process.env.API_TOKEN),
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
