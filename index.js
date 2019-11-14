// EXPRESS SERVER
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const func = require('./function'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


// ENVIROMENT
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;


// MONGO
const MONGO_URL = 'mongodb+srv://' + process.env.MONGO_USER + ':' + process.env.MONGO_KEY + '.mongodb.net/test?retryWrites=true';
const MONGO = require("mongodb").MongoClient;
const client = new MONGO(MONGO_URL, { useNewUrlParser: true });


// START LISTENING SERVER
app.listen(PORT, (error) => {
	func.mes('[START] Server start listening on port ' + PORT);
});



// client.connect( function(error, database){
// 	if (error) return console.log(error);
	
// 	const db = database.db(config.database);

// 	app.listen(PORT, (error) => {
// 		if(error) return console.log(error);
// 		require("./routes")(app, db);
// 		func.mes(`Start listen in: http://localhost:${config.port}`);
// 	});
// });