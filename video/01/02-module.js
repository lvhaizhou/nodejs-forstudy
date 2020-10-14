/*
 * @Author: Lvhz
 * @Date: 2020-10-14 14:53:27
 * @Descripttion: Descripttion
 */
// npm i download-git-repo -S
// npm i ora -S
// git地址：https://github.com/lvhaizhou/nodejs-forstudy.git
// github:su37josephxia/vue-template

const download = require('download-git-repo');
const ora = require('ora');
const process = ora(`下载中...`);

process.start();

// 从git下载项目，这里是回调机制（异步）
download('github:lvhaizhou/nodejs-forstudy', '../test', err => {
  if(err) {
    process.fail();
  } else {
    process.succeed();
  }
})