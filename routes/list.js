const express = require('express');
const router = express.Router();

const res = require('../utils/res');

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
  response.status(200).send(res(request, 200, number));
});

router.get('/letter', function(request, response) {
  response.status(200).send(res(request, 200, letter));
});

router.get('/firstname', function(request, response) {
  response.status(200).send(res(request, 200, firstname));
});

router.get('/lastname', function(request, response) {
  response.status(200).send(res(request, 200, lastname));
});

router.get('/accountname', function(request, response) {
  response.status(200).send(res(request, 200, accountname));
});

router.get('/companyname', function(request, response) {
  response.status(200).send(res(request, 200, companyname));
});

router.get('/employeetitle', function(request, response) {
  response.status(200).send(res(request, 200, employeetitle));
});

router.get('/domain', function(request, response) {
  response.status(200).send(res(request, 200, domain));
});

router.get('/street', function(request, response) {
  response.status(200).send(res(request, 200, street));
});

router.get('/city', function(request, response) {
  response.status(200).send(res(request, 200, city));
});

router.get('/country', function(request, response) {
  response.status(200).send(res(request, 200, country));
});

module.exports = router;
