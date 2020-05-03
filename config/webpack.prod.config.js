const path = require('path');
const paths = require('./paths');

module.exports = {
  mode: 'production',
  entry: paths.entry,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
        {
                test: /(.js|.jsx)/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                loader: 'file-loader',
                },
            ],
        },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
        uielements: paths.uielements,
        src: paths.src,
        assets: paths.assets,
    }
  },
};