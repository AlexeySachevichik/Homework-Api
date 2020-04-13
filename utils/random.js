const log = require('../utils/log');

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

module.exports = {

  getRandomValue: function(min, max) {
    min = Number.parseInt(min);
    max = Number.parseInt(max);
    if ((min || min == 0) && max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      log('warning', 'getRandomValue() - Incorrect attributes');
			return false;
    }
  },

  getRandomArrayItem: function(array) {
    if (array && array.length && array.length > 0) {
      return array[this.getRandomValue(0, array.length-1)];
		} else {
			log('warning', 'getRandomValueFromArray() - Array is empty or not array');
			return false;
    }
  },

  getRandomAccountNumber: function() {
    let firstLetter = this.getRandomArrayItem(letter);
    let secondLetter = this.getRandomArrayItem(letter);
    let number = this.getRandomValue(100000, 999999);

    if (firstLetter && secondLetter && number) {
      return `${firstLetter}${secondLetter}${number}`;
    } else {
      log('warning', 'getRandomAccountNumber() - Account number could not be generated');
			return false;
    }
  },

  getRandomPhone: function() {
    let phoneCode = this.getRandomValue(100, 999);
    let firstPathPhone = this.getRandomValue(100, 999);
    let secondPathPhone = this.getRandomValue(1000, 9999);

    if (phoneCode && firstPathPhone && secondPathPhone) {
      return `(${phoneCode}) ${firstPathPhone}-${secondPathPhone}`;
    } else {
      log('warning', 'getRandomAccountNumber() - Account number could not be generated');
			return false;
    }
  },

  leaveOnlyLetters: function(str) {
		if (str && typeof(str) == 'string' && str.length > 0) {
			let letters = letter.join('').toLowerCase().split('');
			let result = '';

			for (let i=0; i<str.length; i++) {
				if (letters.indexOf(str[i].toLowerCase()) != -1) {
					result += str[i];
				}
			}

			if (result.length > 0) {
        return result;
			} else {
				log('warning', 'leaveOnlyLetters() - Generated string is empty');
				return false;
			}
		} else {
			log('warning', 'leaveOnlyLetters() - String is incorrect');
			return false;
		}
  },
  
  generateEmail: function(firstName, lastName, companyName, domainName) {
		let first = this.leaveOnlyLetters(firstName).toLowerCase();
		let last = this.leaveOnlyLetters(lastName).toLowerCase();
		let company = this.leaveOnlyLetters(companyName).toLowerCase();
		let domain = this.leaveOnlyLetters(domainName).toLowerCase();

		if (first && last && company && domain) {
      return `${first}.${last}@${company}.${domain}`;
		} else {
			log('warning', 'generateEmail() - Something wrong with arguments');
			return false;
		}
  },
  
  getRandomEmail: function() {
    let firstName = this.getRandomArrayItem(firstname);
    let lastName = this.getRandomArrayItem(lastname);
    let companyName = this.getRandomArrayItem(companyname);
    let domainName = this.getRandomArrayItem(domain);

    if (firstName && lastName && companyName && domainName) {

      let generatedEmail = this.generateEmail(firstName, lastName, companyName, domainName);
      if (generatedEmail) {
        return generatedEmail;
      } else {
        log('warning', 'getRandomEmail() - Something wrong with generatedEmail');
        return false;
      }

    } else {
      log('warning', 'getRandomEmail() - Something wrong with generated arguments');
			return false;
    }
  },
  
  generateWebsite: function(companyName, domainName) {
		let company = this.leaveOnlyLetters(companyName).toLowerCase();
		let domain = this.leaveOnlyLetters(domainName).toLowerCase();

		if (company && domain) {
			return `www.${company}.${domain}`;
		} else {
			log('warning', 'generateWebsite() - Something wrong with arguments');
			return false;
		}
  },
  
  getRandomWebsite: function() {
    let companyName = this.getRandomArrayItem(companyname);
    let domainName = this.getRandomArrayItem(domain);

    if (companyName && domainName) {

      let generatedWebsite = this.generateWebsite(companyName, domainName);
      if (generatedWebsite) {
        return generatedWebsite;
      } else {
        log('warning', 'getRandomWebsite() - Something wrong with generatedWebsite');
        return false;
      }

    } else {
      log('warning', 'getRandomWebsite() - Something wrong with generated arguments');
			return false;
    }
  },
  
  generateUrl: function(protocolName, companyName, domainName) {
    let protocol = this.leaveOnlyLetters(protocolName).toLowerCase();
    let company = this.leaveOnlyLetters(companyName).toLowerCase();
    let domain = this.leaveOnlyLetters(domainName).toLowerCase();
    
    if (protocol && company && domain) {
			return `${protocol}://www.${company}.${domain}/`;
		} else {
			log('warning', 'generateUrl() - Something wrong with arguments');
			return false;
		}
  },

  getRandomUrl: function() {
    let flag = this.getRandomValue(0, 1);
    let protocolName = flag ? 'http' : 'https';
    let companyName = this.getRandomArrayItem(companyname);
    let domainName = this.getRandomArrayItem(domain);

    if (protocolName && companyName && domainName) {

      let generatedUrl = this.generateUrl(protocolName, companyName, domainName);
      if (generatedUrl) {
        return generatedUrl;
      } else {
        log('warning', 'getRandomUrl() - Something wrong with generatedUrl');
        return false;
      }

    } else {
      log('warning', 'getRandomUrl() - Something wrong with generated arguments');
			return false;
    }
  },

  getRandomHouseNumber: function() {
    let result = '';
    let flag = this.getRandomValue(0,5);

    if (flag || flag === 0) {
      switch(flag) {
        case 0:
          result += this.getRandomValue(1,5);
          break;

        case 1:
          result += this.getRandomValue(1,5);
          result += this.getRandomValue(0,9);
          break;

        case 2:
          result += this.getRandomValue(1,5);
          result += this.getRandomValue(0,9);
          result += '-';
          result += this.getRandomValue(1,9);
          break;

        case 3:
          result += this.getRandomValue(1,5);
          result += this.getRandomValue(0,9);
          result += '-';
          result += this.getRandomValue(1,9);
          break;

        case 4:
          result += this.getRandomValue(1,5);
          result += '/';
          result += this.getRandomArrayItem(letter);
          break;

        case 5:
          result += this.getRandomValue(1,5);
          result += '/';
          result += this.getRandomValue(0,9);
          break;
      }
      return result;

    } else {
      log('warning', 'getRandomHouseNumber() - Something wrong with generated value');
			return false;
    }
  },

  getRandomZipPostalCode: function() {
    let code = this.getRandomValue(100000, 999999);
    if (code) {
      return code;
    } else {
      log('warning', 'getRandomZipPostalCode() - Something wrong with generated value');
      return false;
    }
  },

  getRandomState: function() {
    let firstLetter = this.getRandomArrayItem(letter);
    let secondLetter = this.getRandomArrayItem(letter);

    if (firstLetter && secondLetter) {
      return `${firstLetter}${secondLetter}`;
    } else {
      log('warning', 'getRandomState() - Something wrong with generated value');
      return false;
    }
  },

  generateAddres: function(houseNumber, street, city, state, zippostalcode, country) {
    if (houseNumber && street && city && state && zippostalcode && country) {
      return {house:houseNumber, street, city, state, code:zippostalcode, country};

    } else {
			log('warning', 'generateAddres() - Something wrong with arguments');
			return false;
		}
  },

  getRandomAddress: function() {
    let houseNumber = this.getRandomHouseNumber();
    let streetName = this.getRandomArrayItem(street);
    let cityName = this.getRandomArrayItem(city);
    let stateName = this.getRandomState();
    let zippostalcodeName = this.getRandomZipPostalCode();
    let countryName = this.getRandomArrayItem(country);

    if (houseNumber && streetName && cityName && stateName && zippostalcodeName && countryName) {

      let generatedAddress = this.generateAddres(houseNumber, streetName, cityName, stateName, zippostalcodeName, countryName);
      if (generatedAddress) {
        return generatedAddress;
      } else {
        log('warning', 'getRandomAddress() - Something wrong with generatedAddress');
        return false;
      }

    } else {
      log('warning', 'getRandomAddress() - Something wrong with generated value');
      return false;
    }
  },

  getRandomPerson: function() {
    let firstName = this.getRandomArrayItem(firstname);
    let lastName = this.getRandomArrayItem(lastname);
    let phone = this.getRandomPhone();
    let accountName = this.getRandomArrayItem(accountname);
    let accountNumber = this.getRandomAccountNumber();
    let companyName = this.getRandomArrayItem(companyname);
    let employeeTitle = this.getRandomArrayItem(employeetitle);
    let domainName = this.getRandomArrayItem(domain);
    let email = this.generateEmail(firstName, lastName, companyName, domainName);
    let website = this.generateWebsite(companyName, domainName);
    let flag = this.getRandomValue(0, 1);
    let protocolName = flag ? 'http' : 'https';
    let url = this.generateUrl(protocolName, companyName, domainName);
    let address = this.getRandomAddress();
    
    if (firstName && lastName && phone && accountName && accountNumber && companyName && employeeTitle && domainName && email && website && url) {
      return {firstName, lastName, phone, accountName, accountNumber, company:companyName, employeeTitle, domain:domainName, email, website, url, ...address};

    } else {
			log('warning', 'getRandomPerson() - Something wrong with arguments');
			return false;
		}
  },


};