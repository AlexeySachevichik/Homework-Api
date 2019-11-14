const func = require("../func");
const random = require("../../random");

module.exports = function(app, db){

	app.post("/bike/add/random", (request, response) => {
		db.collection('bike').insertMany(random.func.getListBike(1), function(error, result){
			if (error){
				func.mes(`500 Record not added!`);
				console.log(error);
				return response.sendStatus(500);
			}
			func.mes(`200 Record added successfully!`);
			return response.sendStatus(200);
		});
	});

	app.post('/bike/add/list/random/:count', (request, response) => {
		if( func.randomCount(request.params.count) ){
			db.collection('bike').insertMany( random.func.getListBike( Number(request.params.count) ), function(error, result){
				if (error){
					func.mes(`500 No records added!`);
					console.log(error);
					return response.sendStatus(500);
				}
				func.mes(`200 ${request.params.count} records successfully added to database!`);
				return response.sendStatus(200);
			});
		}
		else {
			func.mes(`500 Incorrect value! In the url(http://${request.headers.host + request.url}), value "${request.params.count}" must belong to the range [1, 5000]`);
			return response.sendStatus(500);
		};	
	});
};