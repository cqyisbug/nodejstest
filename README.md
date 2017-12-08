[[toc]]

NodeJS 测试与总结
============

function
--------

- 继承 inherit
    ```javascript
        var f = function(){}
        f.prototype = super.prototype;
        child.prototype = new f();
    ```