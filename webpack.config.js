const path = require('path');

const config = {
    entry: path.join(__dirname, 'src', 'index.js'),
    devtool: false,
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};

module.exports = config;
