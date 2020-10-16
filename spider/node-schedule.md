<!--
 * @Author: Lvhz
 * @Date: 2020-10-15 16:34:17
 * @Descripttion: Descripttion
-->

# node-schedule定时器使用

## 规则参数讲解  

6个占位符从左到右分别代表：秒、分、时、日、月、周几  
\*表示通配符，匹配任意，当秒是\*时，表示任意秒数都触发，其他类推  

可以看看以下传入参数分别代表的意思  
```
每分钟的第30秒触发：'30 * * * * *'
每小时的1分30秒触发：'30 1 * * * *'
每天的凌晨1点1分30秒触发：'30 1 1 * * *'
每月的1日1点1分30秒触发：'30 1 1 1 * *'
2020年的1月1日1点1分30秒触发：'30 1 1 1 2020 *'
每周1的1点1分30秒触发：'30 1 1 * * 1'

每整10秒执行一次：'*/10 * * * * *'
每间隔两分钟的第10秒执行一次：'10 */2 * * * *'
```  

1、每个参数还可以传入数值范围  
```js
const task1 = ()=>{
  //每分钟的1-10秒都会触发，其它通配符依次类推
  schedule.scheduleJob('1-10 * * * * *', ()=>{
    console.log('scheduleCronstyle:'+ new Date());
  })
}

task1()
```

2、对象文本语法定时器
```js
const schedule = require('node-schedule');

function scheduleObjectLiteralSyntax(){

    // dayOfWeek
    // month
    // dayOfMonth
    // hour
    // minute
    // second
    // 每周一的下午16：11分触发，其它组合可以根据我代码中的注释参数名自由组合
    schedule.scheduleJob({hour: 16, minute: 11, dayOfWeek: 1}, function(){
        console.log('scheduleObjectLiteralSyntax:' + new Date());
    });
   
}

scheduleObjectLiteralSyntax();
```

3、取消定时器
```js
const schedule = require('node-schedule');

function scheduleCancel(){

    var counter = 1;
    const j = schedule.scheduleJob('* * * * * *', function(){
        
        console.log('定时器触发次数：' + counter);
        counter++;
        
    });

    setTimeout(function() {
        console.log('定时器取消')
      // 定时器取消
        j.cancel();   
    }, 5000);
    
}

scheduleCancel();
```