/**
 * 其实这个文件没什么特色，只是整合了一个Promise
 * 整合的不好，多多包含
 */
"use strict";
var amqp = require("amqp");
var _ = require('underscore');

var defaultOptions = {
    host: 'genius.xin',
    //port: 5672,
    login: 'admin',
    password: 'admin',
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

var conn = null;//connection object
var exchanges = new Map();
var queues = new Map();

exports = module.exports = {
    //初始化 如果想用其他方法，请先调用init方法来初始化
    init: function (op, opImpl, readyCallback) {
        op = op || {} ;
        opImpl = opImpl || {};
        op = _.extend(defaultOptions, op);
        opImpl = _.extend(defaultImplOptions, opImpl);

        return new Promise((resolve, reject) => {
            conn = amqp.createConnection(op, opImpl, readyCallback);
            conn.on('ready', resolve);
            conn.on('error', reject);
            conn.on('close', reject);
            conn.on('end', reject);
        });
    },
    //获取Conn
    getConn: function () {
        if (!conn) {
            console.warn('conn is null,plz check it out!');
        }
        return conn;
    },
    //添加exchange
    addExchange: function (name, options, openCallback) {
        //openCallback can be null
        if (!conn) {
            console.warn('conn is null,plz check it out!');
            return false;
        } else {
            return new Promise((resolve, reject) => {
                var tmpE = conn.exchange(name, options, openCallback);
                exchanges.set(name, tmpE);//存入map
                tmpE.on('open', resolve);
                tmpE.on('error', reject);
            });
        }
    },
    //添加queue
    addQueue: function (name, options, openCallback) {
        if (!conn) {
            console.warn('conn is null,plz check it out!');
            return false;
        } else {
            return new Promise((resolve, reject) => {
                var que = conn.queue(name, options, openCallback);
                queues.set(name, que);//存入map
                que.on("open", resolve);
                que.on("error", reject);
            });
        }
    },
    //获取exchange，如果key为空，则返回false
    getExchange: function (key) {
        if (!key) {
            console.warn('key is null,plz check it out!');
            return false;
        } else {
            return exchanges.get(key);
        }
    },
    //获取queue，如果key为空，则返回false
    getQueue: function (key) {
        if (!key) {
            console.warn('key is null,plz check it out!');
            return false;
        } else {
            return queues.get(key);
        }
    }
};
