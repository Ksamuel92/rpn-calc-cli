// Helper methods and object for RPN calculator logic in calc.js
const popTwoElementsOff = callStack => {
	const b = callStack.pop();
	const a = callStack.pop();
	return [a, b];
};
const isNumber = element => !isNaN(element);
const isOperator = (element, validOperators) => {
	return validOperators(mathOperators).includes(element);
};

const validOperators = mathOperators => Object.keys(mathOperators);
const mathOperators = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b
};

const handleNumber = (element, callStack) => {
	const validInteger = parseInt(element);
	callStack.push(validInteger);
};

const handleOperator = (operator, callStack) => {
	if (callStack.length >= 2 && mathOperators[operator]) {
		const [a, b] = popTwoElementsOff(callStack);
		const operationResult = mathOperators[operator](a, b);
		callStack.push(operationResult);
	}
};
module.exports = {
	isNumber,
	isOperator,
	validOperators,
	handleNumber,
	handleOperator
};
