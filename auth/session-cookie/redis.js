// 没成功，之后再看看怎么在node中使用redis

const Koa = require('koa') // npm install koa -S
const Session = require('koa-session') // npm install koa-session -S
const RedisStore = require('koa-redis') // npm install koa-redis -S
const Redis = require('redis') // npm install redis -S
const Wrapper = require('co-redis') // npm install co-redis -S

const app = new Koa()
const redisClient = Redis.createClient(6379, 'localhost')
const client = Wrapper(redisClient)

// 加密sessionid
app.keys = ['session secret']

const SESS_CONFIG = {
  key: 'kbb:sess',
  // 此时让session存储在redis中
  store: RedisStore({ client })
}

app.use(Session(SESS_CONFIG, app))

app.use(ctx => {
  // 查看redis中的内容
  redisClient.keys('*', (err, keys) => {
    console.log(`keys: ${keys}`);
    keys.forEach(key => {
      redisClient.get(key, (err, val)=>{
        console.log(val);
      })
    })
  })

  if(ctx.path === '/favicon.ico') return
  
  let num = ctx.session.count || 0
  ctx.session.count = ++num
  ctx.body = `第${num}次访问`
})

app.listen(3000, ()=>{
  console.log('listening 3000 SUCCESS');
})
