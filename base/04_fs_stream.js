/*
 * @Author: Lvhz
 * @Date: 2020-04-26 20:17:28
 * @Descripttion: fs流
 */
const fs = require('fs');

// 流的方式读取文件
let fileReadStream = fs.createReadStream('index.js');
let count = 0;
let str = '';

// 开始读取
fileReadStream.on('data', chunk => {
  console.log(`${++count}接收到${chunk.length}`);

  str += chunk;
})

// 读取完成
fileReadStream.on('end', ()=>{
  console.log('--读取完成--');
  console.log(count);
  console.log(str);
})

fileReadStream.on('error', error=>{
  console.log(error);
})


// 流的存入
let data = 'console.log("我要存入数据，哈哈哈~~")';
// 创建一个可写入的流，写入到文件index.js中
let writeStream = fs.createWriteStream('index.js');
// 开始写入
writeStream.write(data, 'utf8');
// 写入完成
writeStream.end();
writeStream.on('finish', ()=>{
  console.log('写入完成！！！');
})
