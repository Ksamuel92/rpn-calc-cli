const parseUserInput = require('../src/calc');

describe('calc.js', () => {
	it('Expects 3 3 + to equal 6', () => {
		const answerObject = parseUserInput([3, 3, '+']);
		expect(answerObject).toEqual({
			currentAnswer: 6,
			currentStack: [6]
		});
	});

	it('Expects 3 3 + to equal 6 iteratively', () => {
		const finalAnswerObject = iterateInputs([3]);
		expect(finalAnswerObject).toEqual({
			currentAnswer: 6,
			currentStack: [6]
		});
	});

	it('Expects 5 5 5 8 + + - to equal -13', () => {
		const answerObject = parseUserInput([5, 5, 5, 8, '+', '+', '-']);
		expect(answerObject).toEqual({
			currentAnswer: -13,
			currentStack: [-13]
		});
	});

	it("Expects '3wow' to throw invalid user input", () => {
		expect(parseUserInput([3, 3, '3wow'])).toEqual({
			currentAnswer: 'Invalid user input',
			currentStack: [3, 3]
		});
	});
});

const iterateInputs = numberArray => {
	const {
		currentStack: firstIterationCS,
		currentAnswer: firstIterationAnswer
	} = parseUserInput([numberArray]);

	const { currentStack: secondIterationCS } = parseUserInput(
		[firstIterationAnswer],
		firstIterationCS
	);

	const finalAnswerObject = parseUserInput(['+'], secondIterationCS);
	return finalAnswerObject;
};
