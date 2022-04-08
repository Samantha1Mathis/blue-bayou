const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"],
      },
      {
        include: path.join(__dirname, "src/images"),
        test: /\.(png|jpg|jpeg|gif)$/i,
        // use: ["file-loader", "extract-loader", "html-loader"],
        type: "asset/resource",
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ PACKAGES_DIR: JSON.stringify("src/images") }),
  ],
};
