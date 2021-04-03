const path = require("path");
const glob = require('glob');
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src')
};

/**
 * Import Loaders
 */
const loaders = [
    require('./webpack/loaders/sass-loader'),
    require('./webpack/loaders/pug-loader')
];


/**
 * Add Plugins
 */
const plugins = [
    new HtmlWebpackPlugin({
        hash: true,
        inject: "body",
        template: "./src/index.pug",
        minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
    new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
];

/**
 * Optimization
 */

const optimization = {
    minimizer: [
        new OptimizeCssAssetsPlugin(),
    ]
};

/**
 * Webpack Configuration
 */
module.exports = merge(common, ...loaders, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: optimization,
    plugins: plugins,

});
