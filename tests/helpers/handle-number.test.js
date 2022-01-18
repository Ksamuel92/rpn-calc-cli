const { handleNumber } = require('../../src/helpers/handle-number');

describe('Handle Number', () => {
	it('Converts a valid string integer to a number and pushes it onto the stack.', () => {
		validStringInteger = '3';
		stack = [];
		handleNumber(validStringInteger, stack);
		expect(stack[0]).toEqual(3);
	}),
		it('Pushes a valid integer onto the stack', () => {
			validInteger = 3;
			stack = [2, 4, 7];
			handleNumber(validInteger, stack);
			expect(stack[stack.length - 1]).toEqual(3);
		});
	it("Doesn't push NaN to the stack", () => {
		notANumber = 'Not a Number';
		stack = [];
		handleNumber(notANumber, stack);
		expect(stack.length).toEqual(0);
	});
});
