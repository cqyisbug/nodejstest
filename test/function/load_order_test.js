/**
 * js 中的函数加载顺序测试
 */

/*  function 这么写放在后面也是可以提前用  */
load_order_test_1();

function load_order_test_1() {
    console.log('这么写放在后面也是可以提前用~');
}


/*  function 这样写不能用  */

var load_order_test_2 = function () {
    console.log('这么写只能放在之前定义');
}

load_order_test_2();