const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    module: {

        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/],
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.html/,
            use: [{
                loader: 'file-loader'
            }]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options:
                { name: '[name].[ext]?[hash]' }
        },
        {
            test: /\.css/,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',]
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        },
        ]
    },
    plugins: [
        // copy the editor files
        new CopyWebpackPlugin([
            { from: './src/index.html' },
        ]),
        new VueLoaderPlugin(),
    ],
    resolve: {

        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    resolveLoader: {
        modules: ["node_modules"]
    },
    output: {
        filename: "calendar.js",
        publicPath: "/"
    },
    mode: "development"
};