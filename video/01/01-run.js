/*
 * @Author: Lvhz
 * @Date: 2020-10-14 14:45:49
 * @Descripttion: Descripttion
 */
// npm i nodemon -g
const os = require('os');
const mem = os.freemem() / os.totalmem();
console.log(`内存空闲率${(mem * 100).toFixed(2)}%`);