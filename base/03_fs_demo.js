/*
 * @Author: Lvhz
 * @Date: 2020-04-26 09:08:58
 * @Descripttion: fs案例
 */
const fs = require('fs');

// 1、判断服务器上面有没有upload目录，没有就创建这个目录
// 2、找出html目录下面的所有目录，然后打印出来


// 图片上传
fs.stat('upload', (err, stats) => {
  // 判断有没有upload目录
  if(err){
    // 如果没有
    fs.mkdir('upload', error => {
      if(error){
        console.log(error);
        return false
      }else{
        console.log('创建upload目录成功');
      }
    })
  }else{
    // 如果存在upload目录
    console.log(stats.isDirectory());
    console.log('有upload目录，并且它是一个文件夹，你可以在这里上传图片');
  }
})


fs.readdir('../node_modules', (err, files) => {
  if(err) {
    console.log(err);
    return false;
  } else {
    // 判断是目录还是文件夹
    console.log(files);

    let filesArr = [];

    (function getFile(i) {
      
      // 循环结束
      if(i == files.length) {
        // 打印出所有目录
        console.log("目录：");
        console.log(filesArr);
        return false;
      }

      // 判断目录是文件还是文件夹
      fs.stat('../node_modules/' + files[i], (error, stats) => {

        if(stats.isDirectory()) {
          filesArr.push(files[i]);
        }

        // 递归调用
        getFile(i+1);
        
      })
    })(0)
  }
})