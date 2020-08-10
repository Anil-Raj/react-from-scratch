const path = require('path');

const config = {
    entry: './index.js',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        ],
    },
    output: {
        filename: "bundle.js",
    }
    
};

module.exports = config;
