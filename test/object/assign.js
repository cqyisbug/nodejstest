"use strict";

let o = require("./o");

//Object.assgin 用来拷贝一个对象,如果要进行深拷贝,不适合用assign

//JavaScript值类型和引用类型有哪些

// （1）值类型：数值、布尔值、null、undefined。
//
// （2）引用类型：对象、数组、函数。

let copy = Object.assign({}, o);

console.log(copy);
/*
 { name: 'caiqiyuan',
  age: 25,
  birthday: 1992-08-11T00:00:00.000Z,
  interests: { basketball: 'good', run: 'good' },
  talk: [Function: talk] }
 */


//  这里解释了为什么assign 不适合深拷贝,它也实现不了深拷贝
let obj1 = {a: 0, b: {c: 0}};
let obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

obj1.a = 1;
console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

obj2.a = 2;
console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

obj2.b.c = 3;
console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}


// 在后面的属性会替换前面已经有了的属性
let o1 = {a: 1, b: 1, c: 1};
let o2 = {b: 2, c: 2};
let o3 = {c: 3};

let obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

