const path = require('path');

const config = {
    entry: './index.js',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.s[ac]ss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
        ]
    },
    output: {
        filename: "bundle.js",
    }

};

module.exports = config;
