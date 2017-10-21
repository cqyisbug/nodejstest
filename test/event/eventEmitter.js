var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("cqy", function () {
    console.log('trigger');
})

setTimeout(function () {
    eventEmitter.emit("cqy")
}, 2000);