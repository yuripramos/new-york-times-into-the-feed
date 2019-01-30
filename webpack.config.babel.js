require("babel-polyfill");
import path from "path";
// import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

const CleanPlugin = new CleanWebpackPlugin(["static"]);

const HTMLPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

const DefinePlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("development")
  },
  API_URL: JSON.stringify("https://api.darksky.net/forecast"),
  SECRET_KEY: JSON.stringify("1af3f94f02d94fb425b5eee315915259")
});

const MiniCSSExtractPluginCSS = new MiniCSSExtractPlugin({
  filename: "style.[chunkhash].css",
  chunkFilename: "[id].css"
});

// const FaviconPlugin = new FaviconsWebpackPlugin({
//   logo: path.resolve(__dirname, "src/assets/images/favicon.png"),
//   icons: {
//     android: false,
//     appleIcon: false,
//     appleStartup: false,
//     coast: false,
//     favicons: true,
//     firefox: false,
//     opengraph: false,
//     twitter: false,
//     yandex: false,
//     windows: false
//   }
// });

const config = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { modules: false }],
            "@babel/preset-react"
          ],
          plugins: [
            "@babel/transform-object-rest-spread",
            "@babel/transform-async-to-generator"
          ]
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
            loader: MiniCSSExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: path.resolve(__dirname, "static")
            }
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
  plugins: [CleanPlugin, DefinePlugin, MiniCSSExtractPluginCSS, HTMLPlugin],
  devtool: "source-map"
};

module.exports = config;
