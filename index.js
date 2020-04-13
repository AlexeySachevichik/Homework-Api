'use strict';

//
// EXPRESS SERVER
//
require('dotenv').config();
const express = require('express');
const app = express();
const log = require('./utils/log');

//
// ENVIROMENT
//
const PORT = process.env.PORT || 8000;

//
// START LISTENING SERVER
//
app.listen(PORT, (error) => {
  if (error) {
    log('error', 'Error start server. ' + error);
    return;
  }
  require('./routes')(app);
  log('START', 'Server start listening on port ' + PORT);
  log('', 'http://localhost:' + PORT);
});
