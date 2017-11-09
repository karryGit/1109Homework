const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    // 入口
    entry: './index.js',
    //出口
    output: {
        filename: 'bunble.js',
        path: __dirname + '/dist'
    },
    //规则we
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            // (给 chunk 一个不同的名字)

            minChunks: Infinity,
            children: true,
            // (随着 entry chunk 越来越多，
            // 这个配置保证没其它的模块会打包进 vendor chunk)
        }),
    ]
}