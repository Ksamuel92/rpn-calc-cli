import {
	isNumber,
	isOperator,
	popTwoElementsOff,
	mathOperators
} from './helpers.js';

const parseUserInput = (userInputArray, callStack = []) => {
	if (userInputArray.length === 0)
		return { callStack, currentAnswer: callStack[callStack.length - 1] };

	const element = userInputArray.shift();

	if (isNumber(element)) {
		handleNumber(element, callStack);
		return parseUserInput(userInputArray, callStack);
	}
	if (isOperator(element)) {
		handleOperator(element, callStack);
		return parseUserInput(userInputArray, callStack);
	}
};

const handleNumber = (element, callStack) => {
	const validInteger = parseInt(element);
	callStack.push(validInteger);
};

const handleOperator = (operator, callStack) => {
	if (callStack.length >= 2) {
		const [a, b] = popTwoElementsOff(callStack);
		const operationResult = mathOperators[operator](a, b);
		callStack.push(operationResult);
	} else {
		//throw error
	}
};

export default parseUserInput;
