//Validates and executes valid operator actions.
const validMathOperators = {
	'+': (a, b) => parseFloat((a + b).toFixed(2)),
	'-': (a, b) => parseFloat((a - b).toFixed(2)),
	'*': (a, b) => parseFloat((a * b).toFixed(2)),
	'/': (a, b) => parseFloat((a / b).toFixed(2))
};

const validOperatorsArray = validMathOperators =>
	Object.keys(validMathOperators);

module.exports = {
	validMathOperators,
	validOperatorsArray
};
