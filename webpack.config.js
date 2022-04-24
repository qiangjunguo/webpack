const path = require('path')
const htmlWebpackOlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    // entry: './src/index.jsx.jsx',
    entry: {
        index: './src/index.js',
        // print: './src/print.js',
        // another:'./src/another-module.js'
        // index: {
        //     import: './src/index.js',
        //     dependOn: 'shared'
        // },
        // another: {
        //     import: './src/another-module.js',
        //     dependOn: 'shared'
        // },
        // shared: 'lodash'

    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // optimization: {
    //     // runtimeChunk: 'single'
    //     splitChunks: {
    //         chunks: "all"
    //     }
    // },
    plugins: [
        new htmlWebpackOlugin({
            // title: '管理输出-自动'
            title: '开发环境'
        })
    ],
    //source-map追溯error
    devtool: 'inline-source-map',
    //webpack-dev-serve
    devServer: {
        static: './dist'
    }
}