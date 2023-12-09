// 首页子应用  首页路由

const express = require('express')
// 首页子应用、
const indexApp = express()

indexApp.get('/',(req,res)=> {
  res.render('index')
})

module.exports = indexApp
