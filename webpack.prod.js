const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new CleanWebpackPlugin()],
});

module.exports = config;
