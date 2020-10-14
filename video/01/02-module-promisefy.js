/*
 * @Author: Lvhz
 * @Date: 2020-10-14 15:15:58
 * @Descripttion: Descripttion
 */

// 让异步任务串行化
// 因为以前的api都是回调的形式，可以使用下面的方法，将其加工成Promise


const repo = 'github:lvhaizhou/nodejs-forstudy';
const desc = './test';

const { clone } = require('./download');

clone(repo, desc);

// async function clone(repo, desc) {
//   const { promisify } = require('util');
//   // 这里用promisify对download-git-repo这个库进行包装，它最后返回回来的就是Promise方法了
//   const download = promisify(require('download-git-repo'));
//   const ora = require('ora');
//   const process = ora(`下载中...`);

//   process.start();

//   try {
//     await download(repo, desc);
//     process.succeed();
//   } catch (error) {
//     process.fail();
//   }
// }

