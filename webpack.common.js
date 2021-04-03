const merge = require('webpack-merge');

const loaders = [
    require('./webpack/loaders/image-loader'),
    require('./webpack/loaders/font-loader')
];

module.exports = merge(...loaders, {
    entry: {
        main: "./src/index.js"
    }
});