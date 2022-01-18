//Validates and processes user inputted operators for a Reverse Polish notation style calculator.

const mathOperators = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b
};

const popTwoElementsOff = callStack => {
	const b = callStack.pop();
	const a = callStack.pop();
	return [a, b];
};

const validOperators = mathOperators => Object.keys(mathOperators);

const isOperator = element => {
	return validOperators(mathOperators).includes(element);
};

const handleOperator = (operator, callStack) => {
	if (callStack.length >= 2 && mathOperators[operator]) {
		const [a, b] = popTwoElementsOff(callStack);
		const operationResult = mathOperators[operator](a, b);
		callStack.push(operationResult);
	}
};

module.exports = {
	isOperator,
	handleOperator
};
