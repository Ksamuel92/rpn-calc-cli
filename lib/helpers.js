// Helper methods for RPN calculator logic in calc.js

exports.validOperators = () => Object.keys(mathOperators);
exports.isNumber = element => !isNaN(element);
exports.isOperator = element => {
	return validOperators().includes(element);
};
exports.popTwoElementsOff = callStack => {
	const b = callStack.pop();
	const a = callStack.pop();
	return [a, b];
};
