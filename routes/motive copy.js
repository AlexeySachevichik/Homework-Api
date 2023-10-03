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

router.post('/cables/search', (request, response) => {
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


router.post('/cables/search/check', jsonParser, function(request, response) {
    log('', JSON.stringify(request.body));
    let result = request.body;
    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number: Incorrect attributes`));
    else response.status(200).send(result);
});

// Example 1 (single cable found)
router.post('/cables/search/1', jsonParser, function(request, response) {
    log('', JSON.stringify(request.body));

    let result = [
        {
            "result_code" : 1200,
            "result_message" : "cables found",
            "make" : "Kenworth",
            "model" : "T680",
            "year" : 2011,
            "vin" : "JF1GPAA63DH868722",
            "cable_info" : {
                "cables" : [
                    {
                        "name" : "003-CABLE - 9 PIN LONG Y (TYPE B)",
                        "short_name" : "CABLE-3003"
                    }
                ],
                "all_cables_required" : true,
                "notes" : "Cable-3003 supports the circular threaded/hex nut mount style of 9-pin connector."
            }
        }
    ];

    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number: Incorrect attributes`));
    else response.status(200).send(result);
});

// Example 2 (multiple cables found - all are required)
router.post('/cables/search/2', jsonParser, function(request, response) {
    log('', JSON.stringify(request.body));

    let result = [
        {
            "result_code" : 1200,
            "result_message" : "cables found",
            "make" : "Kenworth",
            "model" : "T680",
            "year" : 2011,
            "vin" : "JF1GPAA63DH868722",
            "cable_info" : {
                "cables" : [
                    {
                        "name" : "003-CABLE - 9 PIN LONG Y (TYPE B)",
                        "short_name" : "CABLE-3003"
                    },
                    {
                        "name" : "3015-CABLE - LIGHT DUTY OBD-II",
                        "short_name" : "CABLE-3015"
                    }
                ],
                "all_cables_required" : true,
                "notes" : "Cable-3003 supports the circular threaded/hex nut mount style of 9-pin connector."
            }
        }
    ];

    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number: Incorrect attributes`));
    else response.status(200).send(result);
});

// Example 3 (no cables found)
router.post('/cables/search/3', jsonParser, function(request, response) {
    log('', JSON.stringify(request.body));

    let result = [
        {
            "result_code" : 1401,
            "result_message" : "Cable not found - invalid vin",
            "vin" : "JF1GPAA63DH868722",
            "cable_info" : null
        }
    ];

    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number: Incorrect attributes`));
    else response.status(200).send(result);
});

// Example 4 (Multiple input vehicles - mixed results)
router.post('/cables/search/4', jsonParser, function(request, response) {
    log('', JSON.stringify(request.body));

    let result = [
        {
            "result_code" : 1200,
            "result_message" : "cables found",
            "make" : "Kenworth",
            "model" : "T680",
            "year" : 2011,
            "vin" : "JF1GPAA63DH868722",
            "cable_info" : {
                "cables" : [
                    {
                        "name" : "003-CABLE - 9 PIN LONG Y (TYPE B)",
                        "short_name" : "CABLE-3003"
                    }
                ],
                "all_cables_required" : true,
                "notes" : "Cable-3003 supports the circular threaded/hex nut mount style of 9-pin connector."
            }
        },
        {
            "result_code" : 1402,
            "result_message" : "Cable not found - invalid Make/Model/Year",
            "make" : "Kenworth",
            "model" : "T680",
            "year" : 1999,
            "VIN" : null,
            "cable_info" : null
        },
        {
            "result_code" : 1401,
            "result_message" : "Cable not found - invalid vin",
            "VIN" : "JF1GPAA63DH868722",
            "cable_info" : null
        }
    ];

    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number: Incorrect attributes`));
    else response.status(200).send(result);
});

// Example 5 (multiple cables found - only one is required)
router.post('/cables/search/5', jsonParser, function(request, response) {
    log('', JSON.stringify(request.body));

    let result = [
        {
            "result_code" : 1200,
            "result_message" : "cables found",
            "make" : "Kenworth",
            "model" : "T680",
            "year" : 2011,
            "vin" : "JF1GPAA63DH868722",
            "cable_info" : {
                "cables" : [
                    {
                        "name" : "003-CABLE - 9 PIN LONG Y (TYPE B)",
                        "short_name" : "CABLE-3003"
                    },
                    {
                        "name" : "3015-CABLE - LIGHT DUTY OBD-II",
                        "short_name" : "CABLE-3015"
                    }
                ],
                "all_cables_required" : false,
                "notes" : "Cable-3003 supports the circular threaded/hex nut mount style of 9-pin connector."
            }
        }
    ];

    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number: Incorrect attributes`));
    else response.status(200).send(result);
});

// Returns a list of all available makes for vehicles
router.get('/cables/vehicles/makes', function(request, response) {
    let result = {
        "makes": [
            "American LaFrance",
            "Autocar",
            "Autocar Industries",
            "Blue Bird",
            "BMW",
            "Cadillac",
            "Capacity of Texas",
            "Chevy",
            "Chrysler",
            "Dodge",
            "Ford",
            "Freightliner",
            "GMC",
            "Hino",
            "HOG HAULER",
            "Honda",
            "Hummer",
            "IC BUS",
            "International",
            "Isuzu",
            "Kenworth",
            "Kia",
            "Lincoln",
            "Mack",
            "Mercedes-Benz",
            "Mercury",
            "Mitsubishi",
            "Mitsubishi Fuso",
            "Motor Coach Industries",
            "New Flyer",
            "Nissan",
            "NovaBUS",
            "Peterbilt",
            "Pontiac",
            "Prevost",
            "RAM",
            "Setra",
            "Sterling Truck",
            "Subaru",
            "Temsa",
            "Thomas Built",
            "Toyota",
            "UD Trucks",
            "Van Hool",
            "Volvo",
            "Volvo Truck",
            "Western Star",
            "Workhorse"
        ]
    };
    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number`));
    else response.status(200).send(result);
});

// Retrieves the unique truck models for a given make.
router.get('/cables/vehicles/Motor Coach Industries/models', function(request, response) {
    let result = [
        "102C3 Intercity",
        "102D3 Intercity/D4000",
        "102D3 ISTV/D4000 ISTV",
        "102DL3 Intercity/D4500",
        "102EL3 Intercity/E4500",
        "D4505",
        "J4500 Intercity"
    ];
    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number`));
    else response.status(200).send(result);
});
router.get('/cables/vehicles/ford/models', function(request, response) {
    let result = [
        "Ford - T680",
        "Ford - W990",
        "Ford - H345",
    ];
    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number`));
    else response.status(200).send(result);
});
router.get('/cables/vehicles/freightliner/models', function(request, response) {
    let result = [
        "Freightliner - T680",
        "Freightliner - W990",
        "Freightliner - H345",
        "Freightliner - L233",
    ];
    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number`));
    else response.status(200).send(result);
});
router.get('/cables/vehicles/volvo/models', function(request, response) {
    let result = [
        "Volvo - T680",
        "Volvo - W990",
        "Volvo - H345",
        "Volvo - L233",
    ];
    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number`));
    else response.status(200).send(result);
});

module.exports = router;