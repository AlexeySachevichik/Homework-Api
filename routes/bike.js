const ObjectID = require('mongodb').ObjectID;
const func = require('../func');

module.exports = function(app, db){

	app.get('/bike/get/:id', (request, response) => {
		if( func.id(request.params.id) ){
			db.collection('bike').findOne({ _id: ObjectID(request.params.id) }, function(error, document){
				if (error){
					func.mes(`500 Nothing found! There is no entry in the database with an identifier "${request.params.id}"`);
					console.log(error);
					return response.sendStatus(500);
				}
				func.mes(`200 Record with id "${request.params.id}" found!`);
				return response.send(document);
			});
		} else {
			func.mes(`500 Incorrect value! In the url(http://${request.headers.host + request.url}), value "${request.params.id}" must be a database identifier.`);
			return response.sendStatus(500);
		};
	});
};