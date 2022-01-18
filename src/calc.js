const { handleNumber: pushNumberToStack } = require('./helpers/handle-number');
const { isNumber } = require('./helpers/is-number');
const {
	isOperator,
	pushCalculationToStack
} = require('./helpers/rpn-operator-helper');

const parseUserInput = (userInputArray, currentStack = []) => {
	const currentAnswer = currentStack[currentStack.length - 1];

	if (userInputArray.length === 0) {
		return {
			currentStack,
			currentAnswer
		};
	}

	const element = userInputArray.shift();

	if (isNumber(element)) {
		pushNumberToStack(element, currentStack);
		return parseUserInput(userInputArray, currentStack);
	}
	if (isOperator(element)) {
		pushCalculationToStack(element, currentStack);
		return parseUserInput(userInputArray, currentStack);
	}

	return { currentStack, currentAnswer: 'Invalid user input' };
};

module.exports = parseUserInput;
