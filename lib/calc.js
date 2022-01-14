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
	console.log('uIA', userInputArray, 'callStack', callStack);
	if (userInputArray.length === 0)
		return { callstack, currentAnswer: callStack[callStack.length - 1] };
	const element = userInputArray.shift();
	if (isNumber(element)) {
		const number = parseInt(element);
		callStack.push(number);
		return parseUserInput(userInputArray, callStack);
	}

	if (isOperator(element)) {
		const operator = element;
		console.log(operator);
		console.log(callStack.length);
		if (callStack.length >= 2) {
			const [a, b] = popTwoElementsOff(callStack);
			const operationResult = mathOperators[operator](a, b);
			callStack.push(operationResult);
			return parseUserInput(userInputArray, callStack);
		}

		// push result into callStack
		// run parseUserInput
	}
};
