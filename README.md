# webpack-practice-demo
Create a new project base on webpack@4.0 and other tools,,,,,Practice use webpack@4.0


# 什么是 webpack?
1. webpack是一个模块打包工具。
2. 最早时候是JS的模块打包工具，现在已经可以打包任何形式的模块。

# package 配置
1. "private": true, // 表示项目私有化
2. "main":"", // 将入口文件删除，因为我们不会把这个项目给别人使用;
3. "scripts" 配置命令，优先使用工程目录下的指令
    1. "bundle":"webpack"


# webpack 配置
1. 运行npx webpack index.js 或者npm run bundle 编译文件；
2. 如果本地没有配置文件，则用默认的配置文件；
3. 配置文件名默认为webpack.config.js,可以修改文件的名字，如：webpackConfig.js 则用参数webpack --config webpackConfig.js指定配置文件是谁；
4. webpack-cli 的作用是让我们可以再命令行里使用webpack命令

5. loader
> webpack 无法识别后缀不是JS的文件，为了能够让webpack正确的识别和打包这些文件，我们使用对应的loader来帮助webpack处理这些文件；

> loader 的顺序，从下到上，从右到左

| loader名称 | 说明 | 配置 |
| ---- | ---- | ---- |
| file-loader | 处理文件得到文件的地址； |
| url-loader | 包括file-loader的功能，但是打包图片是可以配置图片最小的限制：limit； |
| css-loader | 分析css文件之间的关系，最终将有关系的css文件合并成一个css文件； | modules:true 开启css模块模式，css只作用于当前引入的文件，不作用域全局
| style-loader | 将最终的css样式，移动到header中的style标签中； |
| postcss-loader | 使用autoprefixer插件来自动给标签添加前缀 |
