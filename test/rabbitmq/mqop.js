var amqp = require("amqp");

var defaultOptions = {
    host: 'localhost',
    port: 15672,
    login: 'cqy',
    password: 'cqy',
    authMechanism: 'AMQPLAIN',
    vhost: '/',
    connectionTimeout: 2000,
    ssl: {
        enabled: false
    }
};

var defaultImplOptions = {
    defaultExchangeName: '',
    reconnect: true,
    reconnectBackoffStrategy: 'linear',
    reconnectExponentialLimit: 120000,
    reconnectBackoffTime: 1000
};

var conn = null;//connection object

exports = module.exports = {
    //初始化
    init: function (op, opImpl, readyCallback) {
        conn = new amqp.createConnection(op, opImpl, readyCallback);
        return conn;
    },
    //获取Conn
    getConn: function () {
        if (!conn) {
            console.warn('conn is null,plz check it out!');
        }
        return conn;
    },
    createChannel: function () {
        if (!conn) {
            console.warn('conn is null,plz check it out!');
            return false;
        }

        conn.on('ready',function () {

        });

    },

};