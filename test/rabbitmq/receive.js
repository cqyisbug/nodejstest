var mq = require('./mqop');
var pro = mq.init();

pro.then(() => {
    var p = mq.addQueue("q_1");
    p.then(() => {
        console.log('queue created');
        var q = mq.getQueue("q_1");
        q.bind("e_1", "key",function () {
            console.log('binded');
        });
        q.subscribe(function (message) {
            console.log('recieved message is:' + message.name);
        });
    });
});