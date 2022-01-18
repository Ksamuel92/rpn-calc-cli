#!/usr/bin/env node

/**
 * rpn-calculator-cli
 * A Reverse Polish notation calculator built with Javascript
 *
 * @author Kyle Samuel <www.github.com/Ksamuel92>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const inquirer = require('inquirer');
const parseUserInput = require('./src/calc');
const { run } = require('jest');

const input = cli.input;
const flags = cli.flags;
const { debug, showStack } = flags;
const regexValidator = /[*/+-.]|[0-9]/; // Checks for valid operators and digits

const validateUserInput = async userInput => {
	const isValid = userInput.every(
		element =>
			element.match(regexValidator) || element === 'q' || element === 'ac'
	);
	return isValid;
};

const questions = {
	type: 'input',
	name: 'userInputArray',
	message: 'Input in Reverse Polish notation. (3 3 +)',
	filter: userInput => userInput.split(' '),
	validate: validateUserInput
};

const calculator = async (isInitialized = false, userStack = []) => {
	if (!isInitialized) init();
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	isInitialized = true;

	const { userInputArray } = await inquirer.prompt([questions]);

	if (userInputArray.includes('q')) return;
	if (userInputArray.includes('ac')) return calculator(isInitialized);

	const { currentStack, currentAnswer } = await parseUserInput(
		userInputArray,
		userStack
	);
	if (currentAnswer === undefined) return calculator(isInitialized);

	showStack
		? console.log(
				'Current Answer:',
				currentAnswer,
				'Current Stack:',
				currentStack
		  )
		: console.log('Current Answer:', currentAnswer);
	calculator(isInitialized, currentStack);
};

calculator();

module.export = {
	calculator,
	questions,
	validateUserInput
};
