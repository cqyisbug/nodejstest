/**
 * 时间对象格式化
 * @param fmtPattern
 * @returns {*|string}
 */
Date.prototype.timeFormat = function (fmtPattern) {
    fmtPattern = fmtPattern || "yyyy-MM-dd hh:mm:ss";
    var o = {
        "M+": this.getMonth() + 1,//月份需要加1
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getHours(),
        "q+": Math.floor((this.getMonth() + 3) / 3),//季度
        "S": this.getMilliseconds()//毫秒
    };
    if (/(y+)/.test(fmtPattern)) fmtPattern = fmtPattern.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmtPattern)) fmtPattern = fmtPattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    }
    return fmtPattern;
};

var d = new Date();

console.log(d.timeFormat());
