/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const cpus = require('os').cpus().length

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    },
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        use: [
          // {
          //   loader: 'cache-loader'
          // },
          // {
          //   loader: 'thread-loader',
          //   options: {
          //     workers: cpus - 1
          //   }
          // },
          // 'babel-loader',
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
}
