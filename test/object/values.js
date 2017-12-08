"use strict";

//Object.values  主要祈祷一个枚举的作用,将一个对象中的所有可枚举的值拼接到一起

let o = require('./o');

console.log(Object.values(o));
//[ 'caiqiyuan',
// 25,
// 1992-08-11T00:00:00.000Z,
//     { basketball: 'good', run: 'good' },
//     [Function: talk] ]

// o.interests.enumerable = true; 

console.log(Object.values(o));

let x = function(){
    this.a = "cqyisbug";
};

x.prototype.ta = function(){
    console.log("ta");
};

console.log(Object.values(x));//[]

let xx = new x();

console.log(Object.values(xx));//[ 'cqyisbug' ]
