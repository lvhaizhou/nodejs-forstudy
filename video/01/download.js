/*
 * @Author: Lvhz
 * @Date: 2020-10-14 15:23:38
 * @Descripttion: 提取download函数，使其变成第三方库
 */

module.exports.clone = async function clone(repo, desc) {
  const { promisify } = require('util');
  // 这里用promisify对download-git-repo这个库进行包装，它最后返回回来的就是Promise方法了
  // 引入库的规范：回调的方法必须是最后一个参数，方法的参数中 err 必须是第一个参数 其他的数据data往后写
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora(`下载中...`);

  process.start();

  try {
    await download(repo, desc);
    process.succeed();
  } catch (error) {
    process.fail();
  }
}