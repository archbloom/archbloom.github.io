const path = require('path');
module.exports = {
  // webpack folder’s entry js — excluded from jekyll’s build process.
  entry: "./webpack/entry.js",
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.4
    path: path.resolve(__dirname, "assets/js/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader", // "babel-loader" is also a legal name to reference
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      }
    ]
  }
};