const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const { CleanWebpackPlugin } =  require('clean-webpack-plugin');
const webpack = require("webpack");
module.exports = {
    // 模式,production:会压缩代码，development:代码不会压缩
    mode:"development",
    // 配置sourcemap：是一个映射关系
    devtool:'cheap-module-eval-source-map',
    // 入口文件
    entry:{
       main:"./src/index.js"
    },
    // 输出的位置
    output:{
        // 打包出文件的名字
        filename:"[name].js",
        // 打包出文件的文件夹位置
        path:path.resolve(__dirname, 'dist'),
        // cdn的地址，在编译后会在应用的js文件前拼接上配置的地址
        // publicPath:"/"
    },
    devServer:{
        // 启动在哪一个文件下
        contentBase:"./dist",
        // 是否在启动webpackDevServer的时候，是否自动打开浏览器，并访问地址、
        open:true,
        // 跨域代理
        proxy:{},
        // 开启HMR
        hot:true,
        // 
        hotOnly:true
    },
    // 对于module处理的规则
    module:{
        rules:[{
            // 正则匹配文件的后缀名
            test:/\.(jpg|png|jpeg|svg|gif)$/,
            use:{
                // 使用file-loader来处理匹配到的图片文件
                loader:"url-loader",
                options:{
                    // 生成文件的名字不变，类型也不变
                    // 使用占位符语法
                    name:'[name]_[hash].[ext]',
                    // 图片打包之后的位置
                    outputPath:"images/",
                    // 小于这个限制的条件，将被打包成base64数据，大于限制则保留成静态图片
                    limit:204800
                }
            }
        },{
            // 正则匹配文件的后缀名
            test:/\.(eot|ttf|svg|woff)$/,
            use:{
                // 使用file-loader来处理匹配到的图片文件
                loader:"file-loader",
                options:{
                    // 生成文件的名字不变，类型也不变
                    // 使用占位符语法
                    name:'[name].[ext]',
                    // 图片打包之后的位置
                    outputPath:"font/"
                }
            }
        },{
            test:/\.css$/,
            use:[
                'style-loader', // 将样式移动到header标签内
                {
                    loader:'css-loader',
                    options:{
                        importLoaders:2, // 不管在哪里引入sacc文件，都要运行之前的2个loader
                        // modules:true // 开启css的模块化
                    }
                }, // 合并同样的样式文件
                'postcss-loader'
            ]
        },{
            test:/\.scss$/,
            use:[
                'style-loader', // 将样式移动到header标签内
                {
                    loader:'css-loader',
                    options:{
                        importLoaders:2, // 不管在哪里引入sacc文件，都要运行之前的2个loader
                        // modules:true // 开启css的模块化
                    }
                }, // 合并同样的样式文件
                'sass-loader',  // 解析.scss文件
                'postcss-loader'
            ]
        }
    ]
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./index.html'
    }),new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
]



}