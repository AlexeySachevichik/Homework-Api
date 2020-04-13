const express = require('express');
const router = express.Router();
const jsonParser = express.json();

const log = require('../utils/log');
const res = require('../utils/res');
const random = require('../utils/random');

router.post('/email', jsonParser, function(request, response) {
  log('', JSON.stringify(request.body));
  
  let result = random.generateEmail(
    request.body.firstName,
    request.body.lastName,
    request.body.companyName,
    request.body.domainName
  );

  if (result === false) response.status(200).send(res(request, 500, `Couldn't generate a email`));
  else response.status(200).send(res(request, 200, result));
});

router.post('/website', jsonParser, function(request, response) {
  log('', JSON.stringify(request.body));
  
  let result = random.generateWebsite(
    request.body.companyName,
    request.body.domainName
  );

  if (result === false) response.status(200).send(res(request, 500, `Couldn't generate a website`));
  else response.status(200).send(res(request, 200, result));
});

router.post('/url', jsonParser, function(request, response) {
  log('', JSON.stringify(request.body));
  
  let result = random.generateUrl(
    request.body.protocolName,
    request.body.companyName,
    request.body.domainName
  );

  if (result === false) response.status(200).send(res(request, 500, `Couldn't generate a url`));
  else response.status(200).send(res(request, 200, result));
});

module.exports = router;
