const exampleUserInput = ['3', '4', '+']; // 7
const exampleUserInput2 = ['5']; // 5
const exampleUserInput3 = ['5', '5', '5', '8', '+', '+', '-']; // -13
const callStack = [];
//.shift first element off array
// if number ? turn into number and push to stack : check if operator
// if operator ? pop last two elements off stack and compute : check if invalid user input
// call parseUserInput with shifted array

const mathOperations = {
	'+': console.log('addition time'),
	'-': console.log('we are subtractin'),
	'*': console.log('let us multiply friends'),
	'/': console.log('divide and blunder')
};

const parseUserInput = async userInputArray => {
	if (userInputArray.length === 0) return console.log("it's over");
	const element = userInputArray.shift();
	if (parseInt(element)) callStack.push(element);
	mathOperations[element]
		? mathOperations[element]
		: new Error('Invalid Input');
	parseUserInput(userInputArray);
};
