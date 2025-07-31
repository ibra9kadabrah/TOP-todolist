const { merge } = require ('webpack-merge');
const comon = require ('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        open: true,
        port: 3000,
    },
});