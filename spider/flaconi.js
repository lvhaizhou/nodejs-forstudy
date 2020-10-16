/*
 * @Author: Lvhz
 * @Date: 2020-10-14 17:32:11
 * @Descripttion: 爬取flaconi网站（www.flaconi.de）
 */
const cheerio = require('cheerio'); // 类似jq
const iconv = require('iconv-lite'); // 转码
const { promisify } = require('util');
const originRequest = promisify(require('request')); // 包装了底层的协议，可以发request请求

let number = 1; // 循环次数
let timer = null; // 定时器
let timeNum = 0; // 定时器当前时间
const timeOut = 60 * 2; // 超时时间（10分钟）
const everyTime = 60; // 每次循环的时间（5分钟）


async function useIt() {
  let flag = false; // 是否结束当前循环
  console.log(`第${number}次---开始`);
  const url = `https://www.flaconi.de/make-up/lancome/teint-idole/lancome-teint-idole-ultra-wear-fluessige-foundation.html#sku=80036138-40-1`;
  const options = { url, encoding: null };
  try {
    timer = setInterval(() => {
      timeNum++
      if(timeNum >= timeOut) {
        console.log(`超时：超过${timeNum}秒没响应`);
        task();
        return
      }
      if(!flag && timeNum>= everyTime) {
        task(); // 进入下次循环
      }
    }, 1000)
    flag = true;
    // 需要及时终止request请求：未处理-------------------------------
    const res = await originRequest(url, options);
    const html = iconv.decode(res.body, 'utf-8');
    const $ = cheerio.load(html);
    const moneyStr = $('#product-sku-80036138-40-1 .price-sale').text();
    // console.log(moneyStr);
    console.log(moneyStr.replace(',', '.'));

    console.log(`第${number++}次---结束`);
    flag = false;
  } catch (error) {
    console.log('发生错误了！！！:', error);
    task();
  }
}

// 下一次任务
function task() {
  clearInterval(timer);
  timer = null;
  timeNum = 0;
  useIt();
}

useIt();
