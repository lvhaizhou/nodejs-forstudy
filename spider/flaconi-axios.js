/*
 * @Author: Lvhz
 * @Date: 2020-10-15 17:31:15
 * @Descripttion: Descripttion
 */
const axios = require('axios');
const cheerio = require('cheerio');
const schedule = require('node-schedule');


let time = 1; // 循环次数
let errNum = 0; // 出错次数

const instance = axios.create();

// 获取html页面内容
async function getHTML(url) {
  console.log(`第${time}次：------开始------`);

  let res = null;
  try {
    res = await instance.get(url);
  } catch (error) {
    console.log('Error：', error.code);
    console.log('出错次数：', ++errNum);
    getHTML(url);
    return;
  }
  if(!res) return false;
  const { data } = res;
  task(data, url);

  console.log(`第${time}次：------结束------`);
  time++;
  return true;
}


// 具体的工作内容（获取相应页面中的商品价格）
function task(html, url) {
  // 获取url内的哈希值
  const reg = new RegExp("#sku=(.*)", "i");
  reg.test(url);
  const hash = RegExp.$1;

  const $ = cheerio.load(html);
  const moneyStr = $(`#product-sku-${hash} .price-sale`).text() || $(`#product-sku-${hash} .price`).text();
  // console.log(moneyStr);
  const price = moneyStr.replace(/\s*/g,"").replace(',', '.'); // 价格（欧元）

  const title = $(`#makeup-color-list .color-block [href="#sku=${hash}"]`).attr("data-title");


  console.log(`色号：${title} ， 价格：${price}`);
}




const scheduleCronstyle = url => {
  schedule.scheduleJob('*/10 * * * * *', () => {
    getHTML(url);
  })
}


// 传入flaconi的地址信息
const url = 'https://www.flaconi.de/make-up/lancome/teint-idole/lancome-teint-idole-ultra-wear-fluessige-foundation.html#sku=80036138-40-1';
// const url = 'https://www.flaconi.de/make-up/lancome/teint-idole/lancome-teint-idole-ultra-wear-fluessige-foundation.html#sku=80036138-40-5'
scheduleCronstyle(url);