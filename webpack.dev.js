
const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')




module.exports = {
    entry: './src/client/index.js',
    output: {
        //path: path.join(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client'
    }, 
  
    mode: "development",
    devtool: 'source-map',
    /*devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          compress: true,
        port: 7000
      }, */
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
       
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }), 
    ]
}

