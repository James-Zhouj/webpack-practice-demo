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

6. plugins
>  可以在webpack运行到某个时刻的时候，帮你做一些事情；

   1. html-webpack-plugin 会打包结束之后自动生成一个html文件，并且把；
   2. clean-webpack-plugin 会在打包之前删除指定的文件
   3. webpack.HotModuleReplacementPlugin 热更新，当页面上数据变化的时候，不需要重新加载文件，只修改变化的部分。正常情况下需要配合使用module.hot.accept方法，为什么开发vue的时候我们不用写，因为在css-loader和vue-loader中，已经内置了这样的判断


7. devtool
> 配置sourcemap：它是一个映射关系，将出错的地方从比编译后的源码的位置映射到我们源码中的位置。vlq的编码集合。



| devtool（值） | 构建速度 | 重新构建速度 | 生产环境 | 品质(quality) |
| ---- | ---- | ---- | --- | --- |
| source-map | -- | -- | yes | 会再dist文件夹中生成.map文件 原始源代码 |

inline：不会单独生成.map文件，会讲文件打进生成的js文件中，精确到哪一行哪一列；

cheap：不会单独生成.map文件，会讲文件打进生成的js文件中，只精确到哪一行，并且只会对业务代码生效，不会处理引用的第三方模块；

module：会针对引用的第三方模块进行处理；

eval:不会在编译后的文件中生成map文件，会使用eval的形式提示；

开发环境：使用cheap-module-eval-source-map；

生产环境：使用cheap-module-source-map；

然而vue-cli脚手架搭建的工程，开发环境使用的是eval-source-map，生产环境用的是source-map



8. babel
```

一. 在一般业务代码中的配置方式
功能包：
@babel/preset-env
// 将ES6等新特性转成ES5或者浏览器认识的低版本；

@babel/polyfill
// 将低版本不具备的新功能，挂载到编译后的全局对象上，会污染全局环境；




参数：
useBuildIns:"usage"
// 使用的哪些低版本不具备的功能就添加哪些功能

targets:{
    chrome:">67"
}
// 指定babel在哪些版本的浏览器上使用


形式
presets:[["@babel/preset-env",{
    // 当往低版本的浏览加薪的特性的时候，用到啥补充啥
    useBuiltIns:"usage",
    // 使用的浏览器版本
    targets:{
        chrome:">67"
    }
}]]


二. 在打包类库的时候使用的配置方式
@babel/plugin-transform-runtime
// 变量不会污染全局

{
    "plugins":[["@babel/plugin-transform-runtime",{
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false,
        "version": "7.0.0-beta.0"
    }]]
}



```


