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
	if (stack.length >= 2 && isOperator(operator)) {
		const [a, b] = popTwoElementsOff(stack);
		const operationResult = validMathOperators[operator](a, b);
		if (operationResult === Infinity || isNaN(operationResult)) return;
		const parsedResult = parseFloat(operationResult.toFixed(2));
		stack.push(parsedResult);
		return stack;
	} else {
		console.error(
			'Stack contains less than two elements, add another number!'
		);
	}
};

module.exports = {
	isOperator,
	pushCalculationToStack
};
