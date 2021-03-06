const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: './'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  }
}
