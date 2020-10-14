/*
 * @Author: Lvhz
 * @Date: 2020-04-24 17:58:58
 * @Descripttion: 
 */
const os = require('os')
const mem = os.freemem() * 100 / os.totalmem()
console.log(mem.toFixed(2) + '%');