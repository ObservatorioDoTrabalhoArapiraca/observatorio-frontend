const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/ts/scripts.ts', // Certifique-se de que este caminho está correto
  output: {
    path: path.resolve(__dirname, 'dist'), // Gera os arquivos em 'dist'
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'], // Permite importar .ts sem precisar colocar a extensão
    alias: {
      '@': path.resolve(__dirname, 'src') // Permite importar arquivos usando '@/ts/...'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
