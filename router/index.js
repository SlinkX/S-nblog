// 首页子应用  首页路由

const express = require('express')
// 引入文章中间件
const article = require('../middleware/article')


// 首页子应用、
const indexApp = express()

// 加载首页页面
indexApp.get('/',(req,res)=> {
  res.render('index',{hots:req.hots})
})

module.exports = indexApp
