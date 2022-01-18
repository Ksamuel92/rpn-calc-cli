const handleNumber = require('./handle-number');
const isNumber = require('./is-number');
const { isOperator, handleOperator } = require('./rpn-operator-helper');

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
	if (isOperator(element)) {
		handleOperator(element, callStack);
		return parseUserInput(userInputArray, callStack);
	}

	return { currentCallStack: callStack, currentAnswer: 'Invalid user input' };
};

module.exports = parseUserInput;
