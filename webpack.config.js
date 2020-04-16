// webpack.config.js
var path = require('path')

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'] } } },
      { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ]
  },
   devServer: {
    port: 9000
  }
}