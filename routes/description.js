const func = require("../func");
const random = require("../../random");

module.exports = function(app, db){

	app.get("/description/get", (request, response) => {
		let data = {};
		for( let i in random ){
			if( typeof random[i] === "object" && i !== "func" ){
				data[i] = {};
				for( let j in random[i] ){
					if( typeof random[i][j] === "object" && j !== "words" ){
						data[i][j] = {
							title: random[i][j].title,
							description: random[i][j].description ? random[i][j].description: "",
							unit: random[i][j].unit ? random[i][j].unit : ""
						};
					}
				}
			}
		}
		func.mes(`200 Get description!`);
		return response.send(data);
	});
};