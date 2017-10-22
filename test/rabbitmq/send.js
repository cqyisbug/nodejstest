var mq = require('./mqop');
var pro = mq.init();

pro.then(() => {
    var p = mq.addExchange("e_1", {type: "topic", autoDelete: false});
    p.then(() => {
        console.log('exchange created');
        var e = mq.getExchange("e_1");
        e.publish('key', {name: "hello promise"});
    });
});