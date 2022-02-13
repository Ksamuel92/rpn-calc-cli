//Validates and executes valid operator actions.
const validMathOperators = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b,
  '**': (a, b) => a ** b,
};

const validOperatorsArray = validMathOperators =>
	Object.keys(validMathOperators);

module.exports = {
	validMathOperators,
	validOperatorsArray
};
