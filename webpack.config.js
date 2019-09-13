
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports  = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "build.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.pug'
        }),

    ],

    module: {
        rules: [
          { 
            test: /\.pug$/,
            use: ["pug-loader"]
          },
          {
            test: /\.scss$/i,
            use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'sass-loader'},
            ],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            exclude: [
              path.resolve(__dirname, './node_modules'),
            ],
            use: {
              loader: 'file-loader',
              options: {
                name: './images/[name].[ext]'
              }
            }
          }
        ]
    }
      
}