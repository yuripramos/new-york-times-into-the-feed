require("babel-polyfill");
import path from "path";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

const CleanPlugin = new CleanWebpackPlugin(["build"]);

const HTMLPlugin = new HtmlWebPackPlugin({
  inject: false,
  hash: true,
  template: "./index.html",
  filename: "./index.html"
});

const DefinePlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  },
  API_URL: JSON.stringify("https://api.darksky.net/forecast"),
  SECRET_KEY: JSON.stringify("1af3f94f02d94fb425b5eee315915259")
});

const MiniCSSExtractPluginCSS = new MiniCSSExtractPlugin({
  filename: "style.[contenthash].css",
  chunkFilename: "[id].css"
});

const FaviconPlugin = new FaviconsWebpackPlugin({
  logo: path.resolve(__dirname, "src/assets/images/favicon.png"),
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: false
  }
});

const nodeExternals = require("webpack-node-externals");

const config = {
  entry: { main: "./src/app/index.js" },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash].js"
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: false }],
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-transform-async-to-generator"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /.(mp4|ogv|png|jpg|woff(2)??|eot|otf|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    CleanPlugin,
    DefinePlugin,
    FaviconPlugin,
    MiniCSSExtractPluginCSS,
    HTMLPlugin
  ],
  devtool: "source-map"
};

module.exports = config;
