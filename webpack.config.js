const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'er-js.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'module',
        },
    },
    experiments: {
        outputModule: true,
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif|woff|woff2|eot|ttf)$/,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'demo'),
        },
        compress: true,
        port: 9000,
        open: true,
    },
    resolve: {
        extensions: ['.js'],
    },
};
