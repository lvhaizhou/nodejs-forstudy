// 使用session-cookie的方式，将session存在内存中（每次重启程序，session内容都会被初始化）

const http = require('http')
const Cookie = require('cookie') // npm install cookie --save
//此时session存在内存中
const session = {}
http.createServer((req, res) => {
  const sessionKey = 'sid'
  if (req.url === '/favicon.ico') {
    return
  } else {
    const cookies = Cookie.parse(req.headers.cookie || '')
    //再次访问，对sid请求进行认证
    if (cookies && cookies[sessionKey]) {
      const sid = cookies[sessionKey]
      const userSession = session[sid]
      res.end(`Welcome Back ${userSession.name}`)
    }
    //首次访问，生成sid，保存在服务器端
    else {
      const sid = (Math.random() * 9999999).toFixed()
      // res.setHeader('Set-Cookie', `${sessionKey}=${sid}`) // 原始设置cookie的方式
      res.setHeader('Set-Cookie', Cookie.serialize(sessionKey, sid, { // 使用cookie库的方式
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7 // 1 week
      }))
      session[sid] = { name: 'dylan' }
      res.end('Hello Cookie')
    }
  }
}).listen(3000)