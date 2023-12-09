// 数据模型处理 
 module.exports = class Article extends require('./model'){
  // 获取热门文章
  static getHot(num){
    return new Promise((resolve,reject) =>{
      let sql = 'SELECT id,title,content, `time` FROM article WHERE hot = 1 LIMIT ?'
      this.query(sql,num).then(results => {
        resolve(results)
      }).catch(err => {
        console.log(`获取人热门推荐文章失败 ：${err.message}`)
        reject(err)
      })
    })
  }
 }