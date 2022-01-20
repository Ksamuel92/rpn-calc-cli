const { isNumber } = require('../../lib/helpers/is-number');

describe('isNumber', () => {
	it('returns true when a number type is a number', () => {
		let number = 3;
		expect(isNumber(number)).toBe(true);
	}),
		it('returns true when a string number is a number', () => {
			let stringNumber = '3';
			expect(isNumber(stringNumber)).toBe(true);
		}),
		it('returns false when a string is not a number', () => {
			let string = '3wow';
			expect(isNumber(string)).toBe(false);
		});
});
