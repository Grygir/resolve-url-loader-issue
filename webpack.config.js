const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        style: './src/styles/feature.scss',
        'mobile-style': './src/styles/mobile/feature.scss'
    },
    output: {
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: 'css-loader',
                    options: {}
                }, {
                    loader: 'resolve-url-loader',
                    options: {
                        debug: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sourceMapContents: false
                    }
                }]
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    emitFile: false,
                    publicPath: '/',
                    name: '[path][name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};
