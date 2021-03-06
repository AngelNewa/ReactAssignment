var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'inline-source-map', //to make debugging easier
    entry: {
        'index': './src/index.js'
    
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    //dev server to serve the application only in development
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        hot: true,
        publicPath: "http://localhost:3000/dist/"
    }
}