/*
 * @Author: Lvhz
 * @Date: 2020-04-26 20:49:34
 * @Descripttion: web服务器
 */
const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
  // 获取响应路径
  let { url } = req;
  
  // 默认加载路径
  if(url==='/'){
    url = 'index.html';
  }

  // 过滤 /favicon.ico 请求
  if(url !== '/favicon.ico'){
    fs.readFile(`./${url}`, (err, data)=>{
      if(err){
        // 不存在这个文件
        fs.readFile('./404.html', (errNotFound, dataNotFound)=>{
          if(errNotFound){
            console.log(errNotFound);
          }else{
            res.writeHead(200, {
              'Content-Type': 'text/html;charset="utf-8"'
            })
            res.write(dataNotFound);
            res.end()
          }
        })
        return 
      }else{
        res.writeHead(200, {
          'Content-Type': 'charset="utf-8'
        })
        res.write(data)
        res.end()
        return
      }
    })
  }
}).listen(8080);