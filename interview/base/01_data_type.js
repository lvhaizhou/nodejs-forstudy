/*
 * @Author: Lvhz
 * @Date: 2020-04-27 10:01:14
 * @Descripttion: 数据类型
 */

// 1、解决 0.1 + 0.2 不低于 0.3 的问题
// console.log(0.1+0.2); // 0.30000000000000004

// const math = require('mathjs');
// console.log(math.add(0.1,0.2)); // 0.30000000000000004
// console.log(
//   math.format(
//     math.add(math.bignumber(0.1), math.bignumber(0.2))
//   )
// ); // 0.3

// console.log((0.1+0.2).toFixed(1)); // 0.3

function out(){
  const bigData = Buffer.alloc(100);
  inner = function (){
      console.log(bigData);
  }()
}
out()

