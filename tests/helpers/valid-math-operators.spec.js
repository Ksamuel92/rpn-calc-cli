const {
	validMathOperators,
	validOperatorsArray
} = require('../../lib/helpers/valid-math-operators');

describe('valid-math-operators', () => {
	test('validMathOperators should invoke a function when a valid operator is provided', () => {
		let mathOperator = '+';
		let [a, b] = [3, 3];
		let addition = validMathOperators[mathOperator];
		let answer = addition(a, b);
		expect(answer).toEqual(6);
	});
	test('validOperatorsArray should return an array of keys from an object.', () => {
		let mathObject = {
			'+': 'addition',
			'-': 'subtraction',
			'/': 'division',
			'*': 'multiply'
		};
		let array = validOperatorsArray(mathObject);
		expect(array).toEqual(['+', '-', '/', '*']);
	});
});
