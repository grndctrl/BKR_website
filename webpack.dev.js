const merge = require('webpack-merge')
const common = require('./webpack.bunker.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
})
