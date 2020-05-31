const connection = require("./connection.js");

const orm = {
    selectAll: function(callback) {
        const queryString = "SELECT * FROM burgers"
        connection.query (queryString, function(err,res){
            if (err) throw err
            callback(res)
        })
    },
    insertOne: function(burger_name, callback) {
        const queryString = "INSERT INTO burgers";
        queryString += " (burger_name, devoured) ";
        queryString += "VALUES (";
        queryString += burger_name;
        queryString += ", false) "; 

    console.log(queryString);

        connection.query (queryString, function(err, res){
            if (err) throw err
            callback(res)
        })
    },
    updateOne: function(id, callback) {
        const queryString = "UPDATE burgers SET devoured=1 ";
        queryString += "WHERE id=";
        queryString += id;
        console.log(queryString)

        connection.query (queryString, function(err, res){
            if (err) throw err
            callback(res)
        })
    }
}

module.exports = orm