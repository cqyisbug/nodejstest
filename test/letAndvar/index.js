/**
 * let 的作用范围只会在一个大括号范围内,而且let应该在nodejs的严格模式下使用
 * @type {Array}
 */

"use strict";

var a = [];
var b = [];

/**
 * let 的作用域测试
 */
for(let i = 0 ; i < 10 ;i++){
   a[i] = function () {
       console.log(i);
   }
}

a[6]();


/**
 * var 的作用域测试
 */
for(var i = 0 ; i < 10 ;i++){
    b[i] = function () {
        console.log(i);
    }
}

b[6]();