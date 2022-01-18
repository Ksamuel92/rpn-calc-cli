//Pops two elements off an array and returns them in a new array.
//Designed for RPN calculator implementation.

const popTwoElementsOff = stack => {
	if (stack.length >= 2) {
		const b = stack.pop();
		const a = stack.pop();
		return [a, b];
	} else {
		console.log('The array is not long enough to pop two elements off.');
	}
};

module.exports = {
	popTwoElementsOff
};
