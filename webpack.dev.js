const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Added Loaders
 */
const loaders = [
    require("./webpack/loaders/pug-loader"),
    require('./webpack/loaders/sass-loader')
];

/**
 * Added Plugins
 */
const plugins = [
    new HtmlWebpackPlugin({
        hash: true,
        inject: "body",
        template: "./src/index.pug"
    })
];

/**
 * Webpack Configuration
 */
module.exports = merge(common, ...loaders, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: plugins,
});