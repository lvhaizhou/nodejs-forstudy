/*
 * @Author: Lvhz
 * @Date: 2020-07-15 09:21:36
 * @Descripttion: 运行命令：node spider.js
 */ 
const originRequest = require('request'); // 包装了底层的协议，可以发request请求
const cheerio = require('cheerio'); // 类似jq
const iconv = require('iconv-lite'); // 转码

function request(url, callback) {
  const options = {
    url,
    encoding: null
  };
  originRequest(url, options, callback);
}

// 爬取电影天堂的10个title，电影天堂这个网站比较旧，使用的是 gb2312 的编码
for(let i=100553; i<100563; i++) {
  const url = `https://www.dy2018.com/i/${i}.html`;
  request(url, function(err, res, body) {
    const html = iconv.decode(body, 'gb2312');
    const $ = cheerio.load(html);
    console.log($('.title_all h1').text());
  })
}

// 定时查询（在这个字段更新后可以做相应处理，可以用于购物网站的商品补货监控）
// setInterval(()=>{
//   const url = `https://www.dy2018.com/i/100553.html`;
//   request(url, function(err, res, body) {
//     const html = iconv.decode(body, 'gb2312');
//     const $ = cheerio.load(html);
//     console.log($('.title_all h1').text());
//   })
// }, 2000)

// 测试csdn，用 utf-8 进行转码
// setInterval(()=>{
//   const url = `https://blog.csdn.net/xiejunna/article/details/71170542`;
//   request(url, function(err, res, body) {
//     const html = iconv.decode(body, 'UTF-8');
//     const $ = cheerio.load(html);
//     console.log($('.article-title-box .title-article').text());
//   })
// }, 2000)

// 测试小程序开发文档
// setInterval(()=>{
//   const url = `https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html`;
//   request(url, function(err, res, body) {
//     const html = iconv.decode(body, 'UTF-8');
//     const $ = cheerio.load(html);
//     console.log($('#docContent .content p:nth-child(2)').text());
//   })
// }, 2000)
