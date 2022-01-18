// Takes integer, whether a number or a string, and an array. Converts integer to a number and pushes it onto the array provided.

const handleNumber = (element, array) => {
	const parsedElement = parseFloat(element);
	isNaN(parsedElement) ? null : array.push(parsedElement);
};

module.exports = {
	handleNumber
};
