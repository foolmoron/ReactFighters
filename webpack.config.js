var path = require('path');
var webpack = require('webpack');
 
module.exports = {
    entry: './main.js',
    output: { path: __dirname + '/web', filename: 'bundle.js' },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.jsx?$/i,
                loader: 'babel',
                include: [/main.js/, /scripts.*/],
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ["transform-class-properties", "transform-react-jsx-img-import"]
                },
            },
            {
                test: /\.styl$/i, 
                loader: 'style!css!stylus',
                include: [/styles.*/],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ],
                include: [/sprites.*/],
            }
        ]
    },
};