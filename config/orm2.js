// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  select: function(whatToSelect, table, cb) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, table], function(err, result) {
      console.log(result);
    });
  }
  insertOne: function(table, whatToInsert, cb){
    // BE CAREFUL OF VARIABLE NAME! LINE 13 BURGER.NAME
    var burgerName = burger.name.replace(/\s+/g, "").toLowerCase();
    var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
    connection.query(queryString, [table, whatToInsert]), function(err, result){
      console.log(result);
    }
  }
  updateOne: function(table, objColVals, condition, cb){
    //does condition work like this???
    var queryString = "UPDATE ?? SET ? WHERE " + condition;
    connection.query(queryString, [table, objColVals, condition]), function(err, result){
      console.log(result);
    }
  }
};

// Export the orm object for the model 
module.exports = orm;
