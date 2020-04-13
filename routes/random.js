const express = require('express');
const router = express.Router();
const jsonParser = express.json();

const log = require('../utils/log');
const res = require('../utils/res');
const random = require('../utils/random');

const number = require('../list/number');
const letter = require('../list/letter');
const firstname = require('../list/firstname');
const lastname = require('../list/lastname');
const accountname = require('../list/accountname');
const companyname = require('../list/companyname');
const employeetitle = require('../list/employeetitle');
const domain = require('../list/domain');
const street = require('../list/street');
const city = require('../list/city');
const country = require('../list/country');

router.get('/number', function(request, response) {
  let result = random.getRandomArrayItem(number);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number`));
  else response.status(200).send(res(request, 200, result));
});

router.post('/number', jsonParser, function(request, response) {
  log('', JSON.stringify(request.body));

  let result = random.getRandomValue(request.body.min, request.body.max);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number: Incorrect attributes`));
  else response.status(200).send( res(request, 200, result));
});

router.get('/letter', function(request, response) {
  let result = random.getRandomArrayItem(letter);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random letter`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/firstname', function(request, response) {
  let result = random.getRandomArrayItem(firstname);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random first name`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/lastname', function(request, response) {
  let result = random.getRandomArrayItem(lastname);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random last name`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/accountname', function(request, response) {
  let result = random.getRandomArrayItem(accountname);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random account name`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/accountnumber', function(request, response) {
  let result = random.getRandomAccountNumber();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random account number`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/companyname', function(request, response) {
  let result = random.getRandomArrayItem(companyname);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random company name`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/employeetitle', function(request, response) {
  let result = random.getRandomArrayItem(employeetitle);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random employee title`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/domain', function(request, response) {
  let result = random.getRandomArrayItem(domain);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random domain`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/phone', function(request, response) {
  let result = random.getRandomPhone();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random domain`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/email', function(request, response) {
  let result = random.getRandomEmail();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random email`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/website', function(request, response) {
  let result = random.getRandomWebsite();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random website`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/url', function(request, response) {
  let result = random.getRandomUrl();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random website`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/housenumber', function(request, response) {
  let result = random.getRandomHouseNumber();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random house number`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/street', function(request, response) {
  let result = random.getRandomArrayItem(street);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random street`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/city', function(request, response) {
  let result = random.getRandomArrayItem(city);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random city`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/state', function(request, response) {
  let result = random.getRandomState();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random state`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/zippostalcode', function(request, response) {
  let result = random.getRandomZipPostalCode();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random zip postal code`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/country', function(request, response) {
  let result = random.getRandomArrayItem(country);
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random country`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/address', function(request, response) {
  let result = random.getRandomAddress();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random address`));
  else response.status(200).send(res(request, 200, result));
});

router.get('/person', function(request, response) {
  let result = random.getRandomPerson();
  if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random person`));
  else response.status(200).send(res(request, 200, result));
});


module.exports = router;
