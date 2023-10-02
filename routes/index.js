const log = require('../utils/log');
const res = require('../utils/res');

//
//  ROUTE
//
const list = require('./list');
const random = require('./random');
const generate = require('./generate');
const motive = require('./motive');

//
//  API
//
module.exports = function(app) {

  //
  //  API SETTINGS
  //
	app.use((request, response, next) => {
		response.header('Access-Control-Allow-Origin', '*');
		response.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    log(request.method, request.url);
		next();
	});

  //
  // DEFAULT
  //
  app.get('/', (request, response) => {
		response.status(200).send(res(request, 200, 'API is working fine'));
	});
  
  //
  // LIST OF ROUTES
  //
  app.use('/list', list);
  app.use('/random', random);
  app.use('/generate', generate);
  app.use('/motive', motive);

  // NOT FOUND ROUTE
	app.all('*', (request, response) => {
    log('error', `The route "${request.url}" not found`);
		response.status(404).send(res(request, 404, `The route '${request.url}' not found`));
  });

};