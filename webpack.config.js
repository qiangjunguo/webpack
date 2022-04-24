const path = require('path')
const htmlWebpackOlugin = require('html-webpack-plugin')
module.exports = {
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
            title: '管理输出-自动'
        })
    ]
}