
module.exports = {
    module: {
        rules: [
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "fonts"
                    }
                }
            }
        ]
    }
};