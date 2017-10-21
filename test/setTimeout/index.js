/**
 * setTimeout 测试，主要是测试参数
 * @type {_}
 * @private
 */
var _ = require('underscore')

setTimeout(a, 200, 'c', 'q', 'y')

function a() {
    _.forEach(arguments, function (d, i) {
        console.log("index:" + i + " data:" + d);
    });
}