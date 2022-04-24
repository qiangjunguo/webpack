const path = require('path')

module.exports = {
    entry: './src/index.jsx.jsx',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
}