const path = require('path');

module.exports = {
  //Arquivos de entrada do projeto
  entry: path.resolve(__dirname, 'src', 'index.js'),
  
  // Arquivos de saida do projeto
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  // Config para rodar servidor webpack
  devServer: {
    publicPath: '/',
    contentBase: './public',
    hot: true,
  },

  // Regras de negócio 
  module: {
    rules: [
      {
        // Regex - Config para geração de Arquivos
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};