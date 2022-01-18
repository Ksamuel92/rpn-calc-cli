const { popTwoElementsOff } = require('../../src/helpers/pop-two-elements-off');
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('popTwoElementsOff', () => {
	beforeEach(() => {
		consoleSpy.mockClear();
	});
	it('Should pop two elements off of an array and return new array', () => {
		let array = [3, 5, 7, 9];
		let newArray = popTwoElementsOff(array);
		expect(newArray).toEqual([7, 9]);
	}),
		it('Should console.log when array contains less than two elements.', () => {
			let array = [1];
			popTwoElementsOff(array);
			expect(console.log).toBeCalledTimes(1);
			expect(console.log).toHaveBeenLastCalledWith(
				'The array is not long enough to pop two elements off.'
			);
		});
});
