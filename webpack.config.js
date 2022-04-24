const path = require('path')
const htmlWebpackOlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    // entry: './src/index.jsx.jsx',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
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
        static:'./dist'
    }
}