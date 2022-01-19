// Takes integer, whether a number or a string, and an array. Converts integer to a number and pushes it onto the array provided.

const pushNumberToStack = (element, array) => {
	const parsedElement = parseFloat(element);
	if (isNaN(parsedElement)) {
		return console.error('Not a valid number');
	} else {
		array.push(parsedElement);
		return array;
	}
};

module.exports = {
	pushNumberToStack
};
