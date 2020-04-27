/*
 * @Author: Lvhz
 * @Date: 2020-04-24 17:27:26
 * @Descripttion: 
 */
var url = require('url')
var http = require('http')

http.createServer((req, res) => {
  if(req.url !== '/favicon.ico'){
    // parse：获取地址信息
    // 第一个参数是地址，第二个参数是 true 的话，表示把get传值转换成对象
    var result = url.parse(req.url, true)
    console.log(result);
    console.log(url);
  }
  
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  })

  res.write('<h1 style="text-align: center;">Hello Node</h1>')

  res.end()
}).listen(3000)

console.log(url.parse("http://www.baidu.com/new?name=zhangsan"));
// 输出
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?name=zhangsan',
//   query: 'name=zhangsan',
//   pathname: '/new',
//   path: '/new?name=zhangsan',
//   href: 'http://www.baidu.com/new?name=zhangsan'
// }

// url.format：逆向parse，根据地址信息获取原url信息
console.log(url.format({
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?name=zhangsan',
  query: 'name=zhangsan',
  pathname: '/new',
  path: '/new?name=zhangsan',
  href: 'http://www.baidu.com/new?name=zhangsan'
}));
// 输出：http://www.baidu.com/new?name=zhangsan

// url.resolve：追加或替换地址
console.log(url.resolve("http://www.baidu.com/", "dylan")); // http://www.baidu.com/dylan
console.log(url.resolve("http://www.baidu.com/haha", "dylan")); // http://www.baidu.com/dylan
console.log(url.resolve("http://www.baidu.com/haha/", "dylan")); // http://www.baidu.com/haha/dylan
