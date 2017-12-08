/**
 * js 中的继承测试
 * 猫的名字叫mimi，因为java的教程里面马士兵经常举这个例子。
 * 还有一个拷贝继承，原理就是将js中原型链的属性一一复制过来
 */

/**
 * 父类
 * @param name
 * @constructor
 */
"use strict";
let Animal = function (name) {
    let that = this;
    that.name = name || 'animal';
    that.introduce = function () {
        console.log('hello ,my name is ' + name);
    };
    return this;
};

Animal.prototype.run = function () {
    console.log(this.name + " is running...");
};


let Cat = function () {
    Animal.apply(this, arguments);
};

(function () {
    let f = function () {};
    f.prototype = Animal.prototype;
    Cat.prototype = new f();
})();

let cat = new Cat('mimi');
cat.introduce();
cat.run();


