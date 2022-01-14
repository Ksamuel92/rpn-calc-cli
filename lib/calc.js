const exampleUserInput = ['3', '4', '+']; // 7
const exampleUserInput2 = ['5']; // 5
const exampleUserInput3 = ['5', '5', '5', '8', '+', '+', '-']; // -13
//.shift first element off array
// if number ? turn into number and push to stack : check if operator
// if operator ? pop last two elements off stack and compute : check if invalid user input
// call parseUserInput with shifted array

const validOperators = () => Object.keys(mathOperators);
const isNumber = element => !isNaN(element);
const isOperator = element => {
	return validOperators().includes(element);
};
const popTwoElementsOff = callStack => {
	const b = callStack.pop();
	const a = callStack.pop();
	return [a, b];
};

const mathOperators = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b
};

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
