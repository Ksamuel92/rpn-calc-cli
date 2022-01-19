const { pushNumberToStack } = require('./helpers/push-number-to-stack');
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
		const newStack = pushNumberToStack(element, currentStack);
		if (newStack !== undefined) {
			return parseUserInput(userInputArray, newStack);
		} else {
			return parseUserInput(userInputArray, currentStack);
		}
	}

	if (isOperator(element)) {
		const newStack = pushCalculationToStack(element, currentStack);
		if (newStack !== undefined) {
			return parseUserInput(userInputArray, newStack);
		} else {
			return parseUserInput(userInputArray, currentStack);
		}
	}

	return { currentStack, currentAnswer: 'Invalid user input' };
};

module.exports = parseUserInput;
