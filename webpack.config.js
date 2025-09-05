const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Updated regex to include .jsx files
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Added .jsx to resolve extensions
    },
    mode: 'production', // Set to production for better performance
    devtool: 'source-map' // Added source maps for easier debugging
};