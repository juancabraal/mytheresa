const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const config = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, "public", "favicon.ico"),
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf)$/,
        loader: "url-loader",
        options: { limit: false },
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv && argv.mode === "development") {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: "./.env.development",
        systemvars: true,
      }),
    ];
  }

  return config;
};
