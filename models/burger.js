const orm = require("../config/orm.js");

const burger = {
    selectAll: function(callback) {
        orm.selectAll(function(res){
            callback(res)
        })
    },
    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res){
            callback(res)
        })
    },
    updateOne: function() {

    }
}

module.exports = burger