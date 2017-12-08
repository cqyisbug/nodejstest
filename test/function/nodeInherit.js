/**
 * 测试一下nodeJs自带的继承，可以看出，只能继承prototype里面的属性，并不能继承构造函数里面的。
 */

"use strict";

var util = require("util");


var Animal = function (name) {
    var that = this;
    that.name = name || 'animal';
    that.introduce = function () {
        console.log('hello ,my name is ' + name);
    };
    return this;
};

Animal.prototype.run = function () {
    console.log(this.name + " is running...");
};


var Cat = function () {
    Animal.apply(this,arguments);
};

util.inherits(Cat, Animal);

var cat = new Cat('mimi');
cat.run();
cat.introduce();


if(cat instanceof  Animal){
    console.log('cat is Animal');//cat is Animal
}

if(cat instanceof Cat){
    console.log('cat is Cat');//cat is Cat
}