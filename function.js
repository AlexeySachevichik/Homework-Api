const Lists = require('./routes/lists');

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
	},

	// получим рандомное значение из диапозона
	getRandomValue: function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	// получим рандомное значение из массива
	getRandomValueFromArray: function(arr){
		if (arr && arr.length && arr.length > 0) {
			return arr[this.getRandomValue(0, arr.length-1)];
		} else {
			this.mes('WARN', 'getRandomValueFromArray() - Array is empty or not array');
			return false;
		}
	},

	getRandomNumber: function() {
		return this.getRandomValueFromArray(Lists.number);
	},

	getRandomLetter: function() {
		return this.getRandomValueFromArray(Lists.letter);
	},

	getRandomFirstName: function() {
		return this.getRandomValueFromArray(Lists.firstName);
	},

	getRandomLastName: function() {
		return this.getRandomValueFromArray(Lists.lastName);
	},

	getRandomAccountName: function() {
		return this.getRandomValueFromArray(Lists.accountName);
	},

	getRandomAccountNumber: function() {
		return this.getRandomLetter() + this.getRandomLetter() + this.getRandomValue(100000, 999999);
	},

	getRandomCompanyName: function() {
		return this.getRandomValueFromArray(Lists.companyName);
	},

	getRandomPhone: function() {
		return '(' + this.getRandomValue(100, 999) + ') ' + this.getRandomValue(100, 999) + '-' + this.getRandomValue(1000, 9999);
	},

	leaveOnlyLetters: function(str) {
		if (str && typeof(str) == 'string' && str.length > 0) {
			let letters = Lists.letter.join('').toLowerCase().split('');
			let result = '';

			for (let i=0; i<str.length; i++) {
				if (letters.indexOf(str[i].toLowerCase()) != -1) {
					result += str[i];
				}
			}

			if (result.length > 0) {
				return result;
			} else {
				this.mes('WARN', 'leaveOnlyLetters() - "' + str + '" to generated string is empty');
				return false;
			}
		} else {
			this.mes('WARN', 'leaveOnlyLetters() - "' + str + '" is incorrect');
			return false;
		}
	},

	generateEmail: function(firstName, lastName, companyName, domain) {
		let first = this.leaveOnlyLetters(firstName);
		let last = this.leaveOnlyLetters(lastName);
		let company = this.leaveOnlyLetters(companyName);
		let postfix = this.leaveOnlyLetters(domain);

		if (first && last && company && postfix) {
			return first + '.' + last + '@' + company + '.' + postfix;
		} else {
			this.mes('WARN', 'generateEmail() - Something wrong with arguments');
			return false;
		}
	},

	getRandomDomain: function() {
		return this.getRandomValueFromArray(Lists.domain);
	},

	getRandomEmail: function() {
		return this.generateEmail(
			this.getRandomFirstName(),
			this.getRandomLastName(),
			this.getRandomCompanyName(),
			this.getRandomDomain()
		).toLowerCase();
	},

	generateWebsite: function(name, domain) {
		let company = this.leaveOnlyLetters(name);
		let postfix = this.leaveOnlyLetters(domain);

		if (company && postfix) {
			return 'www.' + company + '.' + postfix;
		} else {
			this.mes('WARN', 'generateWebsite() - Something wrong with arguments');
			return false;
		}
	},

	getRandomWebsite: function() {
		return this.generateWebsite(
			this.getRandomCompanyName(),
			this.getRandomDomain()
		).toLowerCase();
	},

	getRandomUrl: function() {
		var coef = this.getRandomValue(0, 1);
		var letter = coef ? 's' : '';
		return 'http' + letter + '://' + this.getRandomWebsite() + '/';
	}

};

module.exports = func;