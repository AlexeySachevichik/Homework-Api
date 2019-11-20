'use strict';

// EXPRESS SERVER
const express = require("express");
const app = express();
const func = require('./function'); 


// ENVIROMENT
require('dotenv').config();
const PORT = process.env.PORT || 8000;


// MONGO
const MONGO_URL = 'mongodb+srv://' + process.env.MONGO_USER + ':' + process.env.MONGO_KEY + '.mongodb.net/test?retryWrites=true';
const MONGO = require("mongodb").MongoClient;
const client = new MONGO(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });


// START LISTENING SERVER
if (
    process.env.MONGO_USER &&
    process.env.MONGO_KEY &&
    process.env.MONGO_DB
) {
    func.mes('INFO', 'All "Mongo" variables checked');
    client.connect( function(error, database){
        if (error) {
            func.mes('ERROR', 'Error connect to Mongo server');
            console.log(error);
            return;
        }
        const db = database.db(process.env.MONGO_DB);
        app.listen(PORT, (error) => {
            if (error) {
                func.mes('ERROR', 'Error start server');
                console.log(error);
                return;
            }
            require("./routes")(app, db);
            func.mes('START', 'Server with "Mongo" start listening on port ' + PORT);
        });
    });

} else {
    func.mes('INFO', '"Mongo" variable is not exists');
    app.listen(PORT, (error) => {
        if (error) {
            func.mes('ERROR', 'Error start server');
            console.log(error);
            return;
        }
        require("./routes")(app);
        func.mes('START', 'Server start listening on port ' + PORT);
    });
}
