/**
 * Author: Shabalin Pavel
 * Email: aisamiery@gmail.com
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname),
        filename: "app.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        })
    ]
};