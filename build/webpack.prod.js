const merge = require("webpack-merge");

const commonConfig = require("./webpack.common.js");

const prodConfig = {
    // 模式,production:会压缩代码，development:代码不会压缩
    mode:"development",
    // 配置sourcemap：是一个映射关系
    devtool:'cheap-module-source-map',
}

module.exports = merge(commonConfig,prodConfig);