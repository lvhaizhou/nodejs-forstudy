/*
 * @Author: Lvhz
 * @Date: 2020-10-14 15:48:08
 * @Descripttion: Descripttion
 */

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // console.log(getPrototypeChain(res));
  // res.end('hello node');
  const {url, method, headers} = req;
    if(url === '/' && method === 'GET') {
      fs.readFile('index.html', (err, data) => {
        if(err) {
          res.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'});
          res.end('500 服务器端错误');
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      })
    } else if(url === '/user' && method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({name: 'laowang'}))
    } else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
      // 图片文件
      fs.createReadStream('.' + url).pipe(res);
    }
})
server.listen(3000)

// 打印原型链
function getPrototypeChain(obj) {
  var protoChain = [];
  while(obj = Object.getPrototypeOf(obj)) { // 返回给定对象的原型。
    protoChain.push(obj);
  }
  protoChain.push(null);
  return protoChain;
}