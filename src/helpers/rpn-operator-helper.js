const { popTwoElementsOff } = require('./pop-two-elements-off');
const {
	validMathOperators,
	validOperatorsArray
} = require('./valid-math-operators');
//Validates and processes user inputted operators for a Reverse Polish notation style calculator.

const isOperator = element => {
	return validOperatorsArray(validMathOperators).includes(element);
};

const pushCalculationToStack = (operator, stack) => {
	if (stack.length >= 2 && validMathOperators[operator]) {
		const [a, b] = popTwoElementsOff(stack);
		const operationResult = validMathOperators[operator](a, b);
		stack.push(operationResult);
	}
};

module.exports = {
	isOperator,
	pushCalculationToStack
};
