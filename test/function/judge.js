/**
 * 判断Object 类型,这个函数最初是为了验证用户输入的字符串是否是一个合格的函数,但是不能检查函数体内部的语法格式,只能检查一个大概的情况
 * @param str
 * @returns {*}
 */
String.prototype.judge = function (str) {
    try{
        var x = eval("("+this+")");
        if(str){
            if(typeof x === str){
                return x;
            }else{
                return false;
            }
        }else{
            return x;
        }
    }catch (e){
        return false;
    }
}

// var x = "{cqy:123}";
// var u = eval("("+x+")");