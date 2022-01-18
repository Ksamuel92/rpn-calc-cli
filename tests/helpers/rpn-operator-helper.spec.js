const {
	isOperator,
	pushCalculationToStack
} = require('../../src/helpers/rpn-operator-helper');
const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

describe('rpn-operator-helper', () => {
	test('isOperator  will return true if the operator provided is valid', () => {
		let operator = '+';
		let boolean = isOperator(operator);
		expect(boolean).toBe(true);
	}),
		test('pushCalculationToStack will return an array with the calculated value', () => {
			let operator = '+';
			let stack = [3, 3];
			let newStack = pushCalculationToStack(operator, stack);
			expect(newStack).toEqual([6]);
		});
	test('pushCalculationToStack should log an error if operator is invalid or the stack contains less than two elements', () => {
		let operator = '+';
		let stack = [3];
		pushCalculationToStack(operator, stack);
		expect(console.error).toBeCalledTimes(1);
		expect(console.error).toHaveBeenLastCalledWith(
			'Stack contains less than two elements, add another number!'
		);
	});
});
