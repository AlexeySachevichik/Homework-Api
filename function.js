const func = {
	
	mes: function(type, message){
        console.log(`${this.getLogTime(':')} [${type}] ${message}`);
	},
	
	getLogTime: function(separator){
	    const date = new Date();
	    let h = date.getHours();
	    if (h < 10) h = '0' + h;
	    let m = date.getMinutes();
	    if (m < 10) m = '0' + m;
	    let s = date.getSeconds();
	    if (s < 10) s = '0' + s;
	    return h + separator + m + separator + s;
	},
	
	res: function(request, code, body, error) {
		let status;
		if (code == 200) status = 'SUCCESS';
		else if (code == 404) status = 'ERROR';

		return JSON.stringify({
			"status": status || "",
			"request": {
				"code": code || "",
				"url": request.url
			},
			"body": body || "",
			"error": error || ""
		});
	}
	// id: function(id){
	// 	return id !== "" && id.length === 24;
	// },
	// randomCount: function(count){
	// 	return !isNaN(Number(count)) && Number(count) > 0 && Number(count) <= 5000;
	// },
};

module.exports = func;