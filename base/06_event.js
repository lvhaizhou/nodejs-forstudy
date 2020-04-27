/*
 * @Author: Lvhz
 * @Date: 2020-04-26 21:12:22
 * @Descripttion: 非阻塞IO事件驱动
 */

// Node事件循环
// 1、Node是单进程，单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
// 2、Node的每一个API都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
// 3、Node有多个内置事件，我们可以通过引入events模块，并通过实例化 EventEmitter 类来绑定和监听。

const fs = require('fs');
const event = require('events');
// 实例化事件对象
const EventEmitter = new event.EventEmitter();

getExt = () => {
  fs.readFile('./index.html', (err, data)=>{
    // 将data广播出去
    EventEmitter.emit('data', data.toString())
  })
}

getExt()

// 监听data事件
EventEmitter.on('data', ext => {
  console.log(ext);
})
