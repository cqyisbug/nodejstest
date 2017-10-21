var async = require('async');

var parallel = {
    "one": function (done) {
        console.log('one');
        done(null, '1');
    },
    "two": function (done) {
        console.log('two');
        done(null, '2');
    },
    "three": function (done) {
        console.log('three');
        done(null, '3');
    },
    "four": function (done) {
        console.log('four');
        done(null, 4);
    }
}

var errCB = function (err, res) {
    console.log('err', err);
    console.log('res', res);
}

console.log('===========STEP 1==============');
async.parallel(parallel, errCB);


console.log('===========STEP 2==============');
// modify ser Object
parallel.one = function (done) {
    setTimeout(function () {
        console.log('one');
        done(null, '1');
    }, 500);
}

parallel.two = function (done) {
    setTimeout(function () {
        console.log('two');
        done(null, '2');
    }, 100);
}


async.parallel(parallel, errCB)
