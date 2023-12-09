const mysql = require('mysql')

// 数据模型的封装
// 封装了数据库的操作

module.exports = class Model{
  // 连接对象
  static conn = null;

  // 数据库的连接方法
  static  connection(){
    Model.conn = mysql.createConnection({
      host:'127.0.0.1',
      user:'root',
      password:'1111',
      database: 'blog'
    })
    Model.conn.connect(err=>{
      if(err){
        console.log(`数据库连接失败：${err.message}`)
      }
    })
  }

  // 关闭数据库
  static end(){
    if(null != Model.conn){
      Model.conn.end();
    }
  }
  static query(sql,params=[]){
    return new Promise((resolve, reject)=> {
      this.connection()

      Modle.conn.query(sql,params,(err,results)=>{
        if(err){
          reject(err)
        }else{
          resolve(results)
        }
      })
      this.end()
    })
  }
}