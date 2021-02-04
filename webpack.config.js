const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

// production モード以外の場合、変数 enabledSourceMap は true
const enabledSourceMap =  process.env.NODE_ENV !== 'production';

// webpack plugins for  bundle analysis
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  target: 'web',
  // target: ['web', 'es5'] // Webpack5 で必要
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/main.tsx",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: outputPath,
    // 出力ファイル名
    filename: "main.js"
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
        // 対象から外すディレクトリ
        exclude: /node_modules/,
      },
      {
        test: [/\.(s[ac]ss|css)/],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              modules: true, //CSS Modules を有効化
              //productionでなければソースマップを有効に
              sourceMap: enabledSourceMap,
              importLoaders: 2 // sass-loader
            }
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
              //productionでなければソースマップを有効に
              sourceMap: enabledSourceMap,
            }
          },
        ],
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css"]
  },
  watchOptions: {
    poll: true
  },
  // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
  // ここではdistディレクトリのindex.htmlにアクセスするよう設定してます
  devServer: {
      contentBase: outputPath,
      //contentBasePublicPath: '/',
      //compress: true,
      overlay: true,
      port: 9000
  },
};
