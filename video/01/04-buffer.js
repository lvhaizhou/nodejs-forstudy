/*
 * @Author: Lvhz
 * @Date: 2020-10-14 15:37:35
 * @Descripttion: Buffer是浅层封装C语言的库
 */

// 创建Buffer包含的字节（默认UTF-8）
// UTF-8：一种变长的编码方案，使用1-6个字节来存储
// UTF-32：一种固定长度的编码方案，不管字符编号大小，始终使用4个字节来存储
// UTF-16“介于 UTF-8 和 UTF-32之间，使用2个或4个字节来存储，长度即固定又可变

const buf1 = Buffer.alloc(10); // 分配一个大小为10的内存空间
console.log(buf1);

const buf2 = Buffer.from('a');
console.log(buf2);

const buf3 = Buffer.from('中');
console.log(buf3);

// 合并
const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4.toString());
