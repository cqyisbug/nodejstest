var mg = require("./Model")

var x = new mg.Model("172.27.24.88","27017","cy","asd");


var obj = {
    sId: 567,
    sName: "nametest",
    interest: {like:"ccc",sport:"me"}
}

x.save(obj,function () {
    x.find({},function (err,docs) {
        docs.forEach(function (doc,i) {
            console.log(doc._doc)
        })
    })
});