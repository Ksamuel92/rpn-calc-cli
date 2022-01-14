// Helper methods and object for RPN calculator logic in calc.js
exports.popTwoElementsOff = callStack => {
	const b = callStack.pop();
	const a = callStack.pop();
	return [a, b];
};

exports.validOperators = mathOperators => Object.keys(mathOperators);
