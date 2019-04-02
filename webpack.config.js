// webpack.config.js
const path = require('path')
const packageConfig = require('./package.json')
// 编译.vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 注入HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 清除冗余文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// webpack4无法自动压缩.css文件，需要下面的插件支持
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const argv = require('yargs-parser')(process.argv.slice(2))
const _mode = argv.mode || 'development'
const isInDevMode = _mode === 'development'

// set bash title
const setTitle = require('node-bash-title')
setTitle(`${packageConfig.name}(${_mode})`)

module.exports = {
  mode: _mode,
  devtool: isInDevMode ? 'eval' : false,
  devServer: {
    open: true
  },
  output: {
    path: path.join(__dirname, './dist/assets'),
    publicPath: '/',
    filename: 'scripts/[name]-[hash:5].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          // 抽离第三方插件
          test: /node_modules/, // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'common/vendor', // 打包后的文件名，任意命名
          priority: 10 // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
        },
        utils: {
          // 抽离自定义公共代码
          test: /\.js$/,
          chunks: 'initial',
          name: 'common/utils',
          minSize: 0 // 只要超出0字节就生成一个新包
        }
      }
    }
  },
  module: {
    rules: [
      {
        // vue-loader
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        // babel-loader (ES6)
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // css-loader
        test: /\.css$/,
        use: [
          isInDevMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: isInDevMode
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: isInDevMode
            }
          }
        ]
      },
      {
        // eslint-loader
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        // file-loader 自动copy引用的文件
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:5].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name]-[hash:5].css',
      chunkFilename: 'styles/[id]-[hash:5].css'
    }),
    new CleanWebpackPlugin('dist/*', {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
