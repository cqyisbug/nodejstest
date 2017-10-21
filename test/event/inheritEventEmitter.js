var EventEmitter = require('events').EventEmitter;
var util = require('util');
var _ = require('underscore');
var Obj = function () {

};


//以下是继承
(function () {
    var F = function () {

    };
    F.prototype = EventEmitter.prototype;
    Obj.prototype = new F();
})();

//这里 用util 里面的方法也是可以的，因为没有用到构造函数里面的东西嘛。

//util.inherits(Obj, EventEmitter);

Obj.prototype.add = function () {
    var that = this;
    that.addListener("cqy", function () {
        console.log('hello cqy');
    });
};

Obj.prototype.emitU = function () {
    var that = this;
    this.emit('cqy');
};

var o = new Obj();

o.add();

setTimeout(_.bind(o.emitU, o), 2000);//刚开始写的时候没有发现问题，问：为什么要用bind呢？哈哈哈，_.bind 和 jquery中的$.proxy