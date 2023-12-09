const Article = require('../model/article')

// 文章中间件
module.exports ={
  getHot:(req,res,next) => {
    Article.getHot(3).then(results => {
      // req.article = results
      req.hots = results
      next()
    }).catch(err=>{
      next(err)
    })
  }
}