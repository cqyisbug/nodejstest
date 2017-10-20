/**
 * mongo db 使用测试用例
 */
"use strict";

var Schema = require("mongoose").Schema;

var studentSchema = new Schema({
    sId: {type: Number, required: true},
    sName: {type: String, require: true},
    interest: Object,
    updateTime: {type: Date, require: true}
});

var Model = function (ip, port, db, col) {
    if(arguments.length==2){
        //ip 就是连接 port 就是collection
        this.model = ip.model(port,studentSchema,port)
    }else if(arguments.length==4){
        var conn = require("mongoose").createConnection(ip,db,port);
        this.model = conn.model(col,studentSchema,col);
    }else{
        console.log("wrong init construct args,plz check it out");
        return false;
    }
};

/**
 * 计数查询
 * @param cond
 * @param callbackf
 */
Model.prototype.count = function (cond,callbackf) {
    // cond is an object
    this.model.count(cond,callbackf);
};

/**
 * 条件查询
 * @param cond
 * @param callbackf
 */
Model.prototype.find = function (cond,callbackf) {
    this.model.find(cond,callbackf);
};

/**
 * 保存
 * @param obj
 * @param callbackf
 */
Model.prototype.save= function(obj,callbackf){
    var doc = new this.model(obj);
    doc.save(callbackf);
};

/**
 * 修改更新
 * @param obj
 * @param callbackf
 */
Model.prototype.update = function(obj,callbackf){
    this.model.update(obj).exec(callbackf);
};

/**
 * 删除
 * @param cond
 * @param callbackf
 */
Model.prototype.delete = function(cond,callbackf){
    this.model.remove(cond).exec(callbackf);
}