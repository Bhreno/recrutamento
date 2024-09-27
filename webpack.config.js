const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    recrutamento: './src/recrutamento.js',
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                      ['@babel/preset-react',
                      {"runtime": "automatic"}]
                    ]
                }
            }
        },
    ]
  },
  devtool: 'inline-source-map',
  //stats: 'normal',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
};