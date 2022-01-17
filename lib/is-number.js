//Validates element is a number (type inspecific)
//> isNumber(3)
// true
//> isNumber('3')
// true
//> isNumber('*')
// false

const isNumber = element => !isNaN(element);

module.exports = {
	isNumber
};
