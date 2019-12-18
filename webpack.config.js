const path = require('path');

module.exports = {
    // 模式,production:会压缩代码，development:代码不会压缩
    mode:"development",
    // 入口文件
    entry:"./src/index.js",
    // 输出的位置
    output:{
        // 打包出文件的名字
        filename:"bundle.js",
        // 打包出文件的文件夹位置
        path:path.resolve(__dirname, 'dist')
    }



}