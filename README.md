## Webpack配置

> --save-dev   安装在开发环境下  `-D`  
> --save  安装在生产环境下  `-S`

### webpack
`webpack webpack-cli webpack-dev-server`

### 处理JS
`babel-loader@7 @babel/core babel-preset-env`  
`babel-plugin-transform-runtime` 处理ES7,8  
`babel-plugin-transform-decorators`  
`babel-plugin-transform-decorators-legacy`

### 处理CSS

`sass-loader node-sass`  
`css-loader` ↓  
`postcss-loader autoprefixer`↓一些装饰器  
`style-loader`

### 处理模板
`ejs-loader`

### 处理HTML
`html-webpack-plugin`

