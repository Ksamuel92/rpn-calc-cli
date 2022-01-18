// Takes integer, whether a number or a string, and an array. Converts integer to a number and pushes it onto the array provided.

const handleNumber = (element, array) => {
	const validInteger = parseFloat(element);
	array.push(validInteger);
};

module.exports = {
	handleNumber
};
