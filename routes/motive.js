const express = require('express');
const axios = require('axios');
const router = express.Router();
const jsonParser = express.json();

const log = require('../utils/log');
const res = require('../utils/res');

// Each time when the Cable selection flow is triggered, Salesforce sends a REST API request
// to this method in the Cable Tool Service to receive a list of available Makes and Models
router.get('/cables/vehicles', (request, response) => {
    axios({
        method: 'GET',
        url: 'https://growth-engine-http.p.k2labs.org/cables/vehicles',
        headers: {
            'HTTP_X_GROWTH_ENGINE_API_KEY': 'esys',
            'HTTP_X_GROWTH_ENGINE_API_SECRET': 'secret'
        }
    })
        .then((result) => {
            response.status(200).send(result.data);
        })
        .catch((error) => {
            response.status(200).send(res(request, 500, error));
        });
});

router.post('/cables/search', jsonParser, (request, response) => {
    axios({
        method: 'POST',
        url: 'https://growth-engine-http.p.k2labs.org/cables/search',
        headers: {
            'HTTP_X_GROWTH_ENGINE_API_KEY': 'esys',
            'HTTP_X_GROWTH_ENGINE_API_SECRET': 'secret'
        },
        data: request.body
    })
        .then((result) => {
            response.status(200).send(result.data);
        })
        .catch((error) => {
            response.status(200).send(res(request, 500, error));
        });
});

module.exports = router;