"use strict";

var p = function(){};

p.prototype.run = function(){
    console.log("running");
};

console.log(p.prototype);

var a = new p();

console.log(JSON.stringify(p));
