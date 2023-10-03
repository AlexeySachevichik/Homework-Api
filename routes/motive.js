const express = require('express');
const router = express.Router();
const jsonParser = express.json();

const log = require('../utils/log');
const res = require('../utils/res');

router.post('/cables/search', jsonParser, function(request, response) {
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

// Each time when the Cable selection flow is triggered, Salesforce sends a REST API request
// to this method in the Cable Tool Service to receive a list of available Makes and Models
router.get('/cables/vehicles', function(request, response) {
    let result = [
        {
            "make": "American LaFrance",
            "models": [
                "American LaFrance Condor"
            ]
        },
        {
            "make": "Autocar",
            "models": [
                "Xpeditor"
            ]
        },
        {
            "make": "Autocar Industries",
            "models": [
                "Medium Duty On-Highway (XPERT)",
                "Terminal Tractor (XSPOTTER) On-Highway"
            ]
        },
        {
            "make": "Blue Bird",
            "models": [
                "All American / All Canada",
                "BB Conventional"
            ]
        },
        {
            "make": "BMW",
            "models": [
                "320i",
                "328i",
                "335i",
                "535i",
                "X3"
            ]
        },
        {
            "make": "Cadillac",
            "models": [
                "Escalade",
                "XTS"
            ]
        },
        {
            "make": "Capacity of Texas",
            "models": [
                "TJ5000"
            ]
        },
        {
            "make": "Chevy",
            "models": [
                "3500",
                "C4",
                "C5",
                "C6",
                "C7",
                "C8",
                "City Express",
                "Cruze",
                "Express",
                "GMT-400",
                "Silverado",
                "Silverado HD",
                "Suburban",
                "Tahoe",
                "T-Series"
            ]
        },
        {
            "make": "Chrysler",
            "models": [
                "200",
                "300",
                "Charger"
            ]
        },
        {
            "make": "Dodge",
            "models": [
                "Caravan/Grand Caravan",
                "Promaster 2500",
                "Promaster 3500",
                "Ram",
                "Ram Chassis Cab",
                "Sprinter"
            ]
        },
        {
            "make": "Ford",
            "models": [
                "Commercial Chassis",
                "Continental",
                "E-150",
                "E-250",
                "E-350",
                "E-450",
                "Escape",
                "Excursion",
                "Expedition",
                "Expedition MAX",
                "Explorer",
                "F-150",
                "F-250",
                "F-350",
                "F-450",
                "F-550",
                "F-650",
                "F-750",
                "F-800",
                "LT9513",
                "Motorhome Chassis",
                "Navigator",
                "Taurus",
                "Transit",
                "Transit Connect"
            ]
        },
        {
            "make": "Freightliner",
            "models": [
                "108SD",
                "114SD",
                "Argosy",
                "B2 Bus Chassis",
                "C112",
                "C120",
                "Cascadia",
                "CC Conventional",
                "Classic",
                "Columbia",
                "Coronado",
                "CST112",
                "CST120",
                "FB 65 Chassis",
                "FC70",
                "FC80",
                "FL106",
                "FL112",
                "FL50",
                "FL60",
                "FL70",
                "FL80",
                "FLD112",
                "FLD120",
                "FLD132",
                "High COE",
                "Long Conv.",
                "M2",
                "MB Chassis",
                "Med. Conv.",
                "MT 45 Chassis",
                "MT 45G Front Gasoline Engine Walk in Van Chassis",
                "MT 55 Chassis",
                "MT 55G Front Gasoline Engine Walk in Van Chassis",
                "New Cascadia 116\" Day cab",
                "New Cascadia 116\" Sleepercab",
                "New Cascadia 126\" Day cab",
                "New Cascadia 126\" Sleepercab",
                "S2 106 Bus Chassis",
                "S2C 106 Conventional Cab & Chassis",
                "SD122",
                "Sport Chassis",
                "Sprinter",
                "USF-1E",
                "XBP Rear Engine Commercial Bus Chassis",
                "XB Raised Rail Rear Engine Shuttle Bus Chassis",
                "XBR Rail Rear Engine Shuttle Bus Chassis",
                "XC Chassis",
                "XC-F Formed Rail Rear Engine Motor Home Chassis",
                "XC-R Raised Rail Rear Engine Motor Home Chassis"
            ]
        },
        {
            "make": "GMC",
            "models": [
                "C4",
                "C5",
                "C6",
                "C7",
                "C8",
                "Canyon",
                "Savana",
                "Sierra",
                "T-Series",
                "Yukon XL"
            ]
        },
        {
            "make": "Hino",
            "models": [
                "Conventional Type Truck",
                "XJC710  / XFC710",
                "XJC720 / XFC720",
                "XJC730/XFC730",
                "XJC740 / XFC740"
            ]
        },
        {
            "make": "HOG HAULER",
            "models": [
                "HOG HAULER INC"
            ]
        },
        {
            "make": "Honda",
            "models": [
                "Civic",
                "CR-V"
            ]
        },
        {
            "make": "Hummer",
            "models": [
                "H2"
            ]
        },
        {
            "make": "IC BUS",
            "models": [
                "PB105",
                "PC015",
                "PC305",
                "PC505",
                "PC805",
                "XH015"
            ]
        },
        {
            "make": "International",
            "models": [
                "2554",
                "4700",
                "4700 Low Profile",
                "4900",
                "7400",
                "7500",
                "7600",
                "8100",
                "9100",
                "9100i",
                "9200",
                "9400",
                "9800",
                "9900",
                "9900i",
                "9920i",
                "9940i",
                "CF7AA",
                "CF7AB",
                "CV515",
                "CZ7AB",
                "DF557",
                "DF567",
                "DF597",
                "DF677",
                "DF697",
                "DZ567",
                "DZ597",
                "DZ677",
                "DZ697",
                "F-2554",
                "F-2574",
                "F-2654",
                "F-2674",
                "F-4900",
                "F-5070",
                "F-8100",
                "F-9370",
                "HV607",
                "HX520",
                "HX620",
                "KL055",
                "L9217",
                "L9227",
                "L9327",
                "L9357",
                "L9377",
                "L9427",
                "LA617",
                "LA627",
                "LA677",
                "LA687",
                "LF517",
                "LF617",
                "LF627",
                "LF637",
                "LF647",
                "LF657",
                "LF667",
                "LF677",
                "LF687",
                "LF697",
                "LS532",
                "LT625",
                "MA015",
                "MA025",
                "MA035",
                "MA045",
                "MA065",
                "MF035",
                "MH025",
                "MH035",
                "MH065",
                "MV607",
                "PB105",
                "PB305",
                "PC015",
                "PC505",
                "PC805",
                "RA027",
                "RF027",
                "RH613",
                "SA515",
                "SA525",
                "SA537",
                "SA615",
                "SA625",
                "SA637",
                "SA647",
                "SF525",
                "SF537",
                "SF547",
                "SF567",
                "SF625",
                "SF637",
                "SF647",
                "SF667",
                "SR515",
                "SR525",
                "SX525",
                "TA005"
            ]
        },
        {
            "make": "Isuzu",
            "models": [
                "FTR",
                "NPR",
                "NPR/NPR-HD",
                "NQR/NRR",
                "NRR",
                "T6F",
                "T7F"
            ]
        },
        {
            "make": "Kenworth",
            "models": [
                "C5 Series",
                "K 100E",
                "T2000",
                "T270",
                "T2 Series",
                "T3 Series",
                "T4 Series",
                "T600",
                "T660",
                "T680",
                "T6 Series",
                "T7 Series",
                "T800",
                "T880",
                "T8 Series",
                "W900",
                "W990",
                "W9 Series"
            ]
        },
        {
            "make": "Kia",
            "models": [
                "Sorento"
            ]
        },
        {
            "make": "Lincoln",
            "models": [
                "MKT",
                "Town Car"
            ]
        },
        {
            "make": "Mack",
            "models": [
                "Anthem",
                "CH",
                "CHN",
                "CHU",
                "CL",
                "CT",
                "CV",
                "CX",
                "CXN",
                "CXP",
                "CXU",
                "D4005",
                "D4505",
                "DM",
                "Granite",
                "GU",
                "LR",
                "MD",
                "MR",
                "MRU",
                "MS",
                "Pinnacle",
                "RD",
                "TD",
                "Terrapro"
            ]
        },
        {
            "make": "Mercedes-Benz",
            "models": [
                "E-Class",
                "METRIS",
                "S-Class",
                "Sprinter"
            ]
        },
        {
            "make": "Mercury",
            "models": [
                "Grand Marquis"
            ]
        },
        {
            "make": "Mitsubishi",
            "models": [
                "FEC52S",
                "FEC72S",
                "FEC72W",
                "FEC92S",
                "FK62F",
                "FK65F"
            ]
        },
        {
            "make": "Mitsubishi Fuso",
            "models": [
                "FM65F"
            ]
        },
        {
            "make": "Motor Coach Industries",
            "models": [
                "102C3 Intercity",
                "102D3 Intercity/D4000",
                "102D3 ISTV/D4000 ISTV",
                "102DL3 Intercity/D4500",
                "102EL3 Intercity/E4500",
                "D4505",
                "J4500 Intercity"
            ]
        },
        {
            "make": "New Flyer",
            "models": [
                "Xcelsior"
            ]
        },
        {
            "make": "Nissan",
            "models": [
                "NV"
            ]
        },
        {
            "make": "NovaBUS",
            "models": [
                "X3 Passenger"
            ]
        },
        {
            "make": "Peterbilt",
            "models": [
                "220",
                "320",
                "330",
                "335",
                "337",
                "340",
                "348",
                "357",
                "363",
                "365",
                "367",
                "377",
                "378",
                "379",
                "382",
                "384",
                "385",
                "386",
                "387",
                "388",
                "389",
                "520",
                "567",
                "579",
                "587"
            ]
        },
        {
            "make": "Pontiac",
            "models": [
                "Montana/ SV6"
            ]
        },
        {
            "make": "Prevost",
            "models": [
                "H3-45 V.I.P.",
                "H3 Passenger Coach",
                "X3-45 V.I.P.",
                "X3-45 V.I.P. Entertainer",
                "X3 Passenger",
                "XL2-45 Entertainer",
                "XL2 Coach",
                "XL-45 Entertainer",
                "XL Coach"
            ]
        },
        {
            "make": "RAM",
            "models": [
                "1500",
                "2500",
                "3500",
                "4500",
                "5500",
                "Promaster City"
            ]
        },
        {
            "make": "Setra",
            "models": [
                "S 407 CC",
                "S 417",
                "S 417 TC"
            ]
        },
        {
            "make": "Sterling Truck",
            "models": [
                "4500 Job Rated",
                "A9500 series",
                "A9513",
                "A9522",
                "Acterra",
                "L7500 series",
                "L7501",
                "L8500 series",
                "L8501",
                "L8513",
                "L9500 series",
                "L9513",
                "LC Series Car Hauler",
                "M6500 Acterra",
                "M7500 Acterra",
                "M8500 Acterra",
                "SC7000",
                "ST9500 series"
            ]
        },
        {
            "make": "Subaru",
            "models": [
                "Forester"
            ]
        },
        {
            "make": "Temsa",
            "models": [
                "TS30",
                "TS35C",
                "TS 35C",
                "TS 35C / TS 35E",
                "TS 45"
            ]
        },
        {
            "make": "Thomas Built",
            "models": [
                "HDX"
            ]
        },
        {
            "make": "Toyota",
            "models": [
                "Corolla",
                "PRIUS",
                "RAV4",
                "Sienna",
                "Tundra"
            ]
        },
        {
            "make": "UD Trucks",
            "models": [
                "UD2300",
                "UD2600",
                "UD3300"
            ]
        },
        {
            "make": "Van Hool",
            "models": [
                "Commuter Coach",
                "Double Deck Coach",
                "Tourist Coach"
            ]
        },
        {
            "make": "Volvo",
            "models": [
                "9700"
            ]
        },
        {
            "make": "Volvo Truck",
            "models": [
                "VAH",
                "VHD",
                "VN",
                "VNL",
                "VNM",
                "VNR",
                "VNX",
                "VT",
                "WAH",
                "WB",
                "WCA",
                "WG",
                "WIA",
                "WX",
                "WXLL"
            ]
        },
        {
            "make": "Western Star",
            "models": [
                "4700",
                "4800",
                "4900",
                "4900E",
                "5700",
                "5900",
                "K270/K370",
                "T300",
                "T3 Series",
                "T4 Series",
                "T680",
                "T6 Series",
                "T880",
                "T8 Series"
            ]
        },
        {
            "make": "Workhorse",
            "models": [
                "W24"
            ]
        }
    ];
    if (result === false) response.status(200).send(res(request, 500, `Couldn't get a random number`));
    else response.status(200).send(result);
});

module.exports = router;