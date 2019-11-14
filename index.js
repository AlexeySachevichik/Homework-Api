const config         = require("./config");
const func           = require("./func");

const expressClass   = require("express");
const bodyParser     = require("body-parser");
const mongo          = require("mongodb").MongoClient;
const client         = new mongo(config.uri, { useNewUrlParser: true });
const app            = expressClass();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

client.connect( function(error, database){
	if(error) return console.log(error);
	
	const db = database.db(config.database);

	app.listen(config.port, (error) => {
		if(error) return console.log(error);
		require("./routes")(app, db);
		func.mes(`Start listen in: http://localhost:${config.port}`);
	});
});