const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
