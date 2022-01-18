const { handleNumber: pushNumberToStack } = require('./helpers/handle-number');
const { isNumber } = require('./helpers/is-number');
const {
	isOperator,
	pushCalculationToStack
} = require('./helpers/rpn-operator-helper');

const parseUserInput = (userInputArray, currentStack = []) => {
	if (userInputArray.length === 0) {
		const currentAnswer = currentStack[currentStack.length - 1];
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
		const newStack = pushCalculationToStack(element, currentStack);
		return parseUserInput(userInputArray, newStack);
	}

	return { currentStack, currentAnswer: 'Invalid user input' };
};

module.exports = parseUserInput;
