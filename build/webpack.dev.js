
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    // 模式,production:会压缩代码，development:代码不会压缩
    mode:"development",
    // 配置sourcemap：是一个映射关系
    devtool:'cheap-module-eval-source-map',
    devServer:{
        // 启动在哪一个文件下
        contentBase:"./dist",
        // 是否在启动webpackDevServer的时候，是否自动打开浏览器，并访问地址、
        open:true,
        // 跨域代理
        proxy:{},
        // 开启HMR
        hot:true,
        // 即使不支持HMR或者HMR有问题的时候，当代码变更，依然不刷新页面
        hotOnly:true
    },
    plugins:[new webpack.HotModuleReplacementPlugin()],
    // 想要在开发环境使用Tree Shaking,需要配置optimization
    optimization:{
        usedExports:true
    }
}

module.exports = merge(commonConfig,devConfig);