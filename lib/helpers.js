// Helper methods and object for RPN calculator logic in calc.js

export const isNumber = element => !isNaN(element);
export const isOperator = element => {
	return validOperators().includes(element);
};
export const popTwoElementsOff = callStack => {
	const b = callStack.pop();
	const a = callStack.pop();
	return [a, b];
};

export const mathOperators = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b
};

const validOperators = () => Object.keys(mathOperators);
