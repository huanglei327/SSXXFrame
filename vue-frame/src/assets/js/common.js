
//time1开始时间，time2结束时间
export function count_time(time1, time2) {
    time1 = Date.parse(new Date(time1));
    time2 = Date.parse(new Date(time2));
    return Math.abs(parseInt((time2 - time1) / 1000 / 3600 / 24));
}


export function getWeekByDate(date) {
    var day = new Date(Date.parse(date));   //需要正则转换的则 此处为 ： var day = new Date(Date.parse(date.replace(/-/g, '/')));  
    var today = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    return today[day.getDay()];
}

//date计算的日期  dayNumber计算的数量
export function getDateCalculate(date, dayNumber) {
    date = date ? new Date(date) : new Date();
    var ms = dayNumber * (1000 * 60 * 60 * 24)
    var newdays = new Date(date.getTime() + ms);
    var y = newdays.getFullYear();
    var m = newdays.getMonth() + 1;
    var d = newdays.getDate();
    var value = y + '-' + p(m) + '-' + p(d)
    return value
}

//获取当前日期  yyyy-MM-dd
export function getCurrentTime(sms) {

    var myDate = new Date();
    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours();       //获取当前小时数(0-23)
    var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    var s = myDate.getSeconds();
    if (sms)
        return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);

    return year + '-' + p(month) + "-" + p(date);
}


//获取当前日期  yyyy-MM-dd
export function dateToStr(myDate, type) {
    //获取当前年
    var year = myDate.getFullYear()
    //获取当前月
    var month = myDate.getMonth() + 1
    //获取当前日
    var date = myDate.getDate()
    var h = myDate.getHours()       //获取当前小时数(0-23)
    var m = myDate.getMinutes()     //获取当前分钟数(0-59)
    var s = myDate.getSeconds()
    if (type == 'datetime')
        return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s)
    else if (type === 'time')
        return p(h) + ":" + p(m)
    else
        return year + '-' + p(month) + "-" + p(date);
}
export function MathRand(digit) {
    var Num = ""
    for (var i = 0; i < digit; i++) {
        Num += Math.floor(Math.random() * 10);
    }
    return Num
}
export function ckdate(starttime, endtime) {
    var start = new Date(starttime.replace("-", "/").replace("-", "/"))
    var end = new Date(endtime.replace("-", "/").replace("-", "/"))
    if (end < start) {
        return false
    }
    else {
        return true
    }
}

export function getUserInfo(key) {
    var userinfo = JSON.parse(localStorage.getItem("userInfo"))
    if (userinfo != null) {
        return userinfo[key]
    }
}

export function getMyDateByStr(str, type) {
    var oDate = new Date(str)
    oYear = oDate.getFullYear()
    oMonth = oDate.getMonth() + 1
    oDay = oDate.getDate()
    oHour = oDate.getHours()
    oMin = oDate.getMinutes()
    oSen = oDate.getSeconds()

    if (type == 'datetime')
        oTime = oYear + '-' + p(oMonth) + '-' + p(oDay) + ' ' + p(oHour) + ':' + p(oMin) + ':' + p(oSen)
    else if (type === 'time')
        oTime = p(oMin) + ':' + p(oSen)
    else
        oTime = oYear + '-' + p(oMonth) + '-' + p(oDay)
    return oTime;
}

export function statusById(index){
     const status = {
         '10':'提案中',
         '20':'评审中',
         '90':'结案'
     }
     return status[index]
}

//补0操作

function p(s) {
    return s < 10 ? '0' + s : s;
}