/**
 * 一个call 和 apply 的测试,作用类似于jquery 里面的proxy
 * @param name
 * @param color
 */

var superStar = function (name, color) {
    this.name = name;
    this.color = color;
};

var o_call = {};
var o_apply = {};

//注意下面的参数
superStar.apply(o_apply, ["apply_name", "apply_color"]);

superStar.call(o_call, "call_name", "call_color");

console.log("call result", o_call);

console.log('\n\napply result', o_apply)