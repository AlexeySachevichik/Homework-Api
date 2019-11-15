const bodyParser = require("body-parser");
const func = require("../function");

module.exports = function(app, db) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use((request, response, next) => {
		response.header("Access-Control-Allow-Origin", "*");
		response.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
		response.header("Access-Control-Allow-Headers", "Content-Type");
		func.mes(request.method, request.url);
		next();
	});

	app.get('/', (request, response) => {
		response.status(200).send(func.res(request, 200, 'Server listens on port'));
	});
	
	// Список роутов
	// require("./random")(app, db);
	// require("./bike")(app, db);
	// require("./description")(app, db);

	app.all('*', (request, response) => {
		response.status(404).send(func.res(request, 404, '', 'The route not found'));
	});
};