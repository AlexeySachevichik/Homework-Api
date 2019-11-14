module.exports = function(app, db){
	
	// Список роутов
	require("./bike")(app, db);
	require("./random")(app, db);
	require("./description")(app, db);
};