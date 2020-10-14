/*
 * @Author: Lvhz
 * @Date: 2020-10-14 16:54:48
 * @Descripttion: Descripttion
 */
const originRequest = require('request'); // 包装了底层的协议，可以发request请求
const cheerio = require('cheerio'); // 类似jq
const iconv = require('iconv-lite'); // 转码

const requestData = {
  eventId: "",
  eventType: "",
  operateDeptId: "1876",
  operateUserId: "100",
  pageNum: 1,
  pageSize: 10,
  sortType: "",
  street: "",
  timeoutStatus: ""
}

function request(url, callback) {
  const options = {
    url,
    method: "POST",
    headers: {
      "content-type": "application/json",
      // "accessToken": "e265fe73-3879-42de-870b-971efbf5d2fe"
    },
    encoding: null,
    body: JSON.stringify(requestData)
  };
  originRequest(url, options, callback);
}

let time = 0;
const url = `http://10.12.107.80:8109/cityscapeAi/eventList/queryAcceptEventList`;

setInterval(() => {
  request(url, function(err, res, body) {
    // const data = JSON.parse(body.toString());
    console.log(time++);
  })
},0)