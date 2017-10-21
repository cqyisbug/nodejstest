var async = require('async');

//the first param of waterfall is a Array Object
var water = [
    function (cb) {
        console.log('first');
        cb(null, 'first arg 1', 'first arg 2');
    },
    function (arg1, arg2, cb) {
        console.log('second');
        console.log('from first func', 'arg1:', arg1, 'arg2:', arg2);
        cb(null);
    }
];

var errCB = function (err, res) {
    console.log('err', err);
    console.log('res', res);
}

console.log('===========STEP 1==============');
async.waterfall(water, errCB);


console.log('===========STEP 2==============');
var water = prepend(water, function (cb) {
    console.log('new added');
    cb(null)
})
async.waterfall(water, errCB)

function prepend(arr, item) {
    var a = new Array();
    a.push(item);
    return [item].concat(arr);
}
