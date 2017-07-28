var orm = require("../config/orm.js");

var burger = {
	select: function(table, cb){
		orm.select("burgers", function(res){
			cb(res);
		});
	},
	insert: function(table, cols, vals, cb){
		orm.insert("burgers", cols, vals, function(res){
			cb(res);
		});
		
	},
	update: function(table, objColVals, condition, cb){
		orm.update("burgers", objColVals, condition, function(res){
			cb(res);
		});
	}
}

module.exports = burger;


