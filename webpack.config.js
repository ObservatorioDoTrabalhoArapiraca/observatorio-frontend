const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/ts/scripts.ts', // Arquivo principal de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpa a pasta dist antes de compilar
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'src/public'), // Serve os arquivos estáticos do diretório correto
    compress: true,
    port: 8080,
    hot: true,
    open: true, // Abre automaticamente no navegador
    historyApiFallback: true, // Para rotas baseadas em SPA
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Permite importar arquivos sem precisar especificar a extensão
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html', // Usa seu index.html localizado em src/public
      filename: 'index.html',
    }),
  ],
};
