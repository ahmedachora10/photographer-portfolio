const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let loader;

if (true) {
    loader = 'style-loader';
} else {
    loader = MiniCssExtractPlugin.loader;
}

module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    loader,
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            }
        ]
    }
};