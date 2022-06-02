const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modernConfig = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.mjs',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        ['@babel/preset-env', {
                            useBuiltIns: 'usage',
                            targets: {
                              esmodules: true
                            }
                          }]
                    ]
                  }
                }
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'production',
};

const legacyConfig = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        ['@babel/preset-env', {
                            useBuiltIns: 'usage',
                            targets: {
                              esmodules: false
                            }
                          }]
                    ]
                  }
                }
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'production',
};

module.exports = [modernConfig, legacyConfig];