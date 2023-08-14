const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [
{
  // クライアントサイドの設定
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
          // ここからが新しく追加するCSSのローダー設定です。
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
},
  //サーバー
  {
  mode: "development",
  entry: "./server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,   // ファイルタイプを追加
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']  // presets をこちらに追加
          }  
        }
      },
      {
        test: /\.css$/,
        loader: 'null-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
}
];
