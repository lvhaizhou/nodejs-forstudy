/*
 * @Author: Lvhz
 * @Date: 2020-04-24 17:54:53
 * @Descripttion: 文件管理
 */
/*
  fs.stat：检测是文件还是目录
  fs.mkdir：创建目录
  fs.writeFile：创建写入文件
  fs.appendFile：追加文件
  fs.readFile：读取文件
  fs.readdir：读取目录
  fs.rename：重命名
  fs.rmdir：删除目录
  fs.unlink：删除文件
*/

const fs = require('fs')

// fs.stat：检测是文件还是目录
fs.stat('./index.js', (error, stats) => {
  if(error){
    console.error(error);
    return false
  }else{
    console.log(`是否是文件：${stats.isFile()}`); // true
    console.log(`是否是目录：${stats.isDirectory()}`); // false
    return false
  }
})

// fs.mkdir：创建目录
// 参数1：path-目录路径
// 参数2：mode-目录权限（读写权限），默认 0777
// 参数3：callback-回调
fs.mkdir('css', err => {
  if(err){
    console.error(err);
    return false
  }else{
    console.log('创建目录成功');
  }
})

// fs.rmdir：删除目录
fs.rmdir('css', err=>{
  if(err){
    console.log(err);
    return false
  }else{
    console.log('删除成功');
  }
})

// fs.writeFile：创建写入文件（存在即覆盖，不存在即创建）
fs.writeFile('index.js', 'hello dylan', err=>{
  if(err){
    console.warn(err);
    return false
  }else{
    console.log('写入成功');
    return
  }
})


// fs.appendFile：追加文件
fs.appendFile('index.js', '我要追进去！！', err=>{
  if(err){
    console.warn(err)
    return false
  }else{
    console.log('追加成功');
  }
})


// fs.readFile：读取文件
fs.readFile('index.js', (err, data)=>{
  if(err){
    console.warn(err)
    return false
  }else{
    console.log(data);
    console.log(data.toString());
  }
})

// fs.readdir：读取目录
fs.readdir('../node_modules', (err, data)=>{
  if(err){
    console.warn(err);
    return false
  }else{
    console.log(data);
  }
})

// fs.rename：重命名（可用于修改文件的位置，相当于剪切功能）
fs.rename('../index.js', 'index.js', err=>{
  if(err){
    console.warn(err)
    return false
  }else{
    console.log('重命名成功');
  }
})