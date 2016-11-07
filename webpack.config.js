var path = require('path');
var webpack = require('webpack');
 
module.exports = {
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                include: [path.resolve(__dirname, './main.js'), path.resolve(__dirname, './scripts')],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/, 
                loader: 'style!css!stylus',
                include: [path.resolve(__dirname, './styles')],
            }
        ]
    },
};