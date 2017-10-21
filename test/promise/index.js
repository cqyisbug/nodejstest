// 测试promise的成功返回，只会返回第一个参数，world！会显示为undefined
var p = new Promise((a, b) => {
    setTimeout(a, 200, 'hello', 'world');
});

p.then((a, b) => {
    console.log(a, b)
});


// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
//
// timeout(100).then((value) => {
//     console.log(value);
// });


//ruan yi feng  的例子，url：http://es6.ruanyifeng.com/#docs/promise
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}

