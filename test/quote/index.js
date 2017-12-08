
"use strict";

var ser_bak = {
    'one': 123,
    'two': 456
};
var ser2  = ser_bak;
var ser1 = ser2;
    ser1.one = 999;
console.log('ser', ser1);
console.log('ser_bak', ser_bak);
