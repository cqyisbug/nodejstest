var amqp = require("amqp");

var defaultOptions = {
    host: 'localhost',
    port: 15672,
    login: 'cqy',
    password: 'cqy',
    authMechanism: 'AMQPLAIN',
    vhost: '/',
    connectionTimeout: 10000,
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

module.exports = {
    init: function (op, opImpl, readyCallback) {
        return amqp.createConnection(op, opImpl, readyCallback);
    }
};

