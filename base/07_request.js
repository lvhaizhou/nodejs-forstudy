/*
 * @Author: Lvhz
 * @Date: 2020-04-26 21:20:09
 * @Descripttion: get与post请求
 */

const http = require('http');

// 虚拟SQL读取出来的数据
let items = [];

http.createServer((req, res)=>{
  // 设置跨域的域名，* 代表允许任意域名跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 设置Header类型
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // 跨域允许的请求方式
  res.setHeader('Content-Type', 'application/json');

  const { method } = req

  switch(method){
    // post请求时，浏览器会先发一次options请求，如果请求通过，则继续发送正式的post请求
    case 'OPTIONS': 
      res.statusCode = 200;
      res.end();
      break;
    case 'GET':
      let data = JSON.stringify(items);
      res.write(data)
      res.end()
      break
    case 'POST':
      let item = ''
      // 读取每次发送的请求
      req.on('data', chunk=>{
        item += chunk
      })
      // 数据发送完成
      req.on('end', ()=>{
        // 存入
        item = JSON.parse(item)
        console.log(item);
        items.push(item.item)
        // 将数据返回到客户端
        let data = JSON.stringify(items)
        res.write(data)
        res.end()
      })
      break
  }
}).listen(3000)
