const parseUserInput = require('../lib/calc');

test('Expect 3 3 + to equal 6', () => {
	const answerObject = parseUserInput([3, 3, '+']);
	expect(answerObject).toEqual({
		currentAnswer: 6,
		currentCallStack: [6]
	});
});

test('Expect 3 3 + to equal 6 iteratively', () => {
	const {
		currentCallStack: firstIterationCS,
		currentAnswer: firstIterationAnswer
	} = parseUserInput([3]);

	const { currentCallStack: secondIterationCS } = parseUserInput(
		[firstIterationAnswer],
		firstIterationCS
	);

	const finalAnswerObject = parseUserInput(['+'], secondIterationCS);

	expect(finalAnswerObject).toEqual({
		currentAnswer: 6,
		currentCallStack: [6]
	});
});

test('Expect 5 5 5 8 + + - to equal -13', () => {
	const answerObject = parseUserInput([5, 5, 5, 8, '+', '+', '-']);
	expect(answerObject).toEqual({
		currentAnswer: -13,
		currentCallStack: [-13]
	});
});

test("Expect '3wow' to throw invalid user input", () => {
	expect(parseUserInput([3, 3, '3wow'])).toEqual({
		currentAnswer: 'Invalid user input',
		currentCallStack: [3, 3]
	});
});
