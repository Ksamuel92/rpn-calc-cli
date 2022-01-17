const {
	validOperators,
	isNumber,
	isOperator,
	handleNumber,
	handleOperator
} = require('./helpers');

const parseUserInput = (userInputArray, callStack = []) => {
	if (userInputArray.length === 0)
		return {
			currentCallStack: callStack,
			currentAnswer: callStack[callStack.length - 1]
		};

	const element = userInputArray.shift();

	if (isNumber(element)) {
		handleNumber(element, callStack);
		return parseUserInput(userInputArray, callStack);
	}
	if (isOperator(element, validOperators)) {
		handleOperator(element, callStack);
		return parseUserInput(userInputArray, callStack);
	}
};

module.exports = parseUserInput;
