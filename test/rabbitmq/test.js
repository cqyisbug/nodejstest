var amqp = require("amqp");

var conn = amqp.createConnection({
    host: "39.108.142.248",
    port: 15672,
    login: 'cqy',
    password: 'cqy',
    connectionTimeout: 2000
},{},function () {
    console.log('ready')
});

conn.on('ready', function () {
    console.log('ready')
});
conn.on('error', function (err) {
    console.log(err)
});
conn.on("close", function () {
    console.log('close')
});
conn.on('end', function () {
    console.log('end')
});