const exampleUserInput = ['3', '4', '+']; // 7
const exampleUserInput2 = ['5']; // 5
const exampleUserInput3 = ['5', '5', '5', '8', '+', '+', '-']; // -13
//.shift first element off array
// if number ? turn into number and push to stack : check if operator
// if operator ? pop last two elements off stack and compute : check if invalid user input
// call parseUserInput with shifted array

const validOperators = () => Object.keys(mathOperators);
const isNumber = element => !isNaN(element);
const isOperator = element => validOperators.includes(element);

const mathOperators = {
	'+': console.log('we are adding'),
	'-': console.log('we are subtractin'),
	'*': console.log('let us multiply friends'),
	'/': console.log('divide and blunder')
};

const parseUserInput = async (userInputArray, callStack = []) => {
	const element = userInputArray.shift();
	if (isNumber) callStack.push(element);
	if (isOperator) mathOperators[element];
};
