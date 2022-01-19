const { pushNumberToStack } = require('../../src/helpers/push-number-to-stack');

describe('pushNumberToStack', () => {
	it('Converts a valid string integer to a number and pushes it onto the stack.', () => {
		validStringInteger = '3';
		stack = [];
		pushNumberToStack(validStringInteger, stack);
		expect(stack[0]).toEqual(3);
	}),
		it('Pushes a valid integer onto the stack', () => {
			validInteger = 3;
			stack = [2, 4, 7];
			pushNumberToStack(validInteger, stack);
			expect(stack[stack.length - 1]).toEqual(3);
		});
	it("Doesn't push NaN to the stack", () => {
		notANumber = 'Not a Number';
		stack = [];
		pushNumberToStack(notANumber, stack);
		expect(stack.length).toEqual(0);
	});
});
