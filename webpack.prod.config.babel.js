import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import webpack from "webpack";

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "index.html"),
  filename: "index.html",
  inject: "body"
});

const CleanPlugin = new CleanWebpackPlugin(["build"]);

const DefinePlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  },
  API_URL: JSON.stringify("https://api.nytimes.com/svc/topstories/v2"),
  SECRET_KEY: JSON.stringify("CWVf5pfTZPYZUKKPWYX9SW0ZZLMrtpgd")
});

const ExtractTextPluginCSS = new ExtractTextPlugin({
  filename: "style.[chunkhash].css",
  allChunks: true,
  ignoreOrder: true
});

const UglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    screw_ie8: true,
    conditionals: true,
    unused: true,
    comparisons: true,
    sequences: true,
    dead_code: true,
    evaluate: true,
    if_return: true,
    join_vars: true
  },
  output: {
    comments: false
  }
});

const CommonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor",
  minChunks: Infinity,
  filename: "vendor.bundle.[chunkhash].js"
});

const AggressiveMergingPlugin = new webpack.optimize.AggressiveMergingPlugin();

const LoaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
});

const OptimizeCssAssets = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.(css|scss)$/g,
  cssProcessorOptions: {
    discardComments: {
      removeAll: true
    }
  }
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

const config = {
  resolve: {
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  entry: {
    app: "./src/app/index.js",
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.[chunkhash].js",
    chunkFilename: "chunk.[chunkhash].js"
  },
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
            "sass-loader"
          ]
        })
      },
      {
        test: /.(mp4|ogv|png|jpg|woff(2)??|eot|otf|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    CleanPlugin,
    DefinePlugin,
    HTMLWebpackPluginConfig,
    ExtractTextPluginCSS,
    UglifyPlugin,
    CommonChunksPlugin,
    LoaderOptionsPlugin,
    AggressiveMergingPlugin,
    FaviconPlugin,
    OptimizeCssAssets
  ],
  devtool: "source-map"
};

module.exports = config;
