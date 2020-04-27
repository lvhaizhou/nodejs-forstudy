/*
 * @Author: Lvhz
 * @Date: 2020-04-24 17:19:41
 * @Descripttion: 
 */
var http = require("http");

http.createServer((req, res) => {
  // 设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  })

  res.write('<h1 style="text-align: center;">Hello Node</h1>')

  res.end()
}).listen(3000)