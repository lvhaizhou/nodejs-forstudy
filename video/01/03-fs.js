/*
 * @Author: Lvhz
 * @Date: 2020-10-14 15:29:50
 * @Descripttion: Descripttion
 */

const fs = require('fs');

// 同步读取
// const data = fs.readFileSync('./download.js');
// console.log(data); // 读出来的是Buffer（文件的二进制形式）
// console.log(data.toString());

// 异步读取
fs.readFile('./download.js', (err, data) => {
  if(err) throw err;
  console.log(data.toString());
});