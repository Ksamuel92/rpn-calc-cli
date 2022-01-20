// Takes integer, whether a number or a string, and an array. Converts integer to a number and pushes it onto the array provided.

const pushNumberToStack = (element, stack) => {
	const parsedElement = parseFloat(element);
	if (isNaN(parsedElement)) {
		return console.error('Not a valid number');
	} else {
		stack.push(parsedElement);
		return stack;
	}
};

module.exports = {
	pushNumberToStack
};
