const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const config = require(path.resolve(__dirname, 'config/theme.json'))

module.exports = {
  node: {
    fs: "empty"
  },
  
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: 'theme/include',
      to: ''
    }, {
      from: 'theme/templates',
      to: 'templates'
    }]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ],

  module: {
    rules: [{
      test: /\.ts$/,

      include: [path.resolve(__dirname, 'theme', 'src')],

      use: {
        loader: 'babel-loader',
        loader: 'ts-loader',
      }
    }, {
      test: /\.js$/,

      include: [path.resolve(__dirname, 'theme', 'src')],

      loader: 'babel-loader',
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(sass|scss|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              postcssPresetEnv({ browsers: 'last 2 versions' })
            ]
          }
        },
        'sass-loader'
      ]
    }, {
      test: /\.(svg|png|jpg)$/,

      use: {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
          publicPath: '../'
        }
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': path.resolve(__dirname, 'theme', 'src')
    }
  },

  entry: {
    shared: './theme/src/shared.js'
  },

  output: {
    path: path.resolve(__dirname, 'server/wp-content/themes', config.slug),
    filename: 'js/[name].bundle.js'
  },

  mode: 'development',

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     name: 'chunks'
  //   }
  // }
}
