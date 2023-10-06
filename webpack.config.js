const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    devtool: false,
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
