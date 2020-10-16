/*
 * @Author: Lvhz
 * @Date: 2020-10-15 16:28:56
 * @Descripttion: 爬取flaconi网站（www.flaconi.de），node定时器
 */
const schedule = require('node-schedule');

let time = 0;

const scheduleCronstyle = () => {
  // 每分钟的第30秒定时执行一次
  schedule.scheduleJob('10 */2 * * * *', () => {
    console.log(++time);
  })
}

scheduleCronstyle();
