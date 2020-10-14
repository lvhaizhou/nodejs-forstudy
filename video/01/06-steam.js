/*
 * @Author: Lvhz
 * @Date: 2020-10-14 16:15:00
 * @Descripttion: 流
 */

const fs = require('fs');
const rs = fs.createReadStream('./img.jpg');
const ws = fs.createWriteStream('./img-copy.jpg');
// 将两个流用导管连接在一起
rs.pipe(ws);