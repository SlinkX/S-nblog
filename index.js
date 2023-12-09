// 入口模块
const express = require('express');
// 创建主应用
const app=express()

// 模版引擎设置
app.set('view engine','html')
app.set('views',`${__dirname}/views`)
app.engine('html',require('ejs').renderFile)

// 静态资源配置
app.use(express.static('static'))

// 调用首页子应用
app.use('/',require('./router/index'))
app.use('/index',require('./router/index'))

app.use(/\/(index)?/,require('./router/index'))
// 监听服务器
app.listen(3000)
