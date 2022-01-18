const { popTwoElementsOff } = require('./pop-two-elements-off');
//Validates and processes user inputted operators for a Reverse Polish notation style calculator.

const mathOperators = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b
};

const validOperators = mathOperators => Object.keys(mathOperators);

const isOperator = element => {
	return validOperators(mathOperators).includes(element);
};

const pushCalculationToStack = (operator, stack) => {
	if (stack.length >= 2 && mathOperators[operator]) {
		const [a, b] = popTwoElementsOff(stack);
		const operationResult = mathOperators[operator](a, b);
		stack.push(operationResult);
	}
};

module.exports = {
	isOperator,
	pushCalculationToStack
};
