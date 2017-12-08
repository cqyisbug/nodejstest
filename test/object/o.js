"use strict";

exports = module.exports = {
    name: "caiqiyuan",
    age: 25,
    birthday: new Date('1992-08-11'),
    interests:{
        basketball:"good",
        run:"good"
    },
    talk: function () {
        console.log(this.name + " is talking");
    }
};