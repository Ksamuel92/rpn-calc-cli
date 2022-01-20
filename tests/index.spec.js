const parseUserInput = require('../lib/calc');
const { stdin } = require('mock-stdin');

describe('RPN Calculator', () => {
	beforeAll(() => {
		io = stdin();
	});

	it('should prompt for input', async () => {
		let mockPrompt = jest
			.fn()
			.mockReturnValue({ userInputArray: [3, 3, '+'] });
		let userInput = '3 3 +';
		process.nextTick(() => {
			io.send(`${userInput}\r`);
		});
		const result = await mockPrompt();
		expect(result).toEqual({ userInputArray: [3, 3, '+'] });
	});
	it('should calculate the resulting array and return the current answer and current callstack', async () => {
		let { userInputArray } = { userInputArray: [3, 3, '+'] };
		let calculation = await parseUserInput(userInputArray);
		expect(calculation).toEqual({
			currentAnswer: 6,
			currentStack: [6]
		});
	});
	afterAll(() => {
		io.restore();
	});
});
