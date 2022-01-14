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
const parseUserInput = require('./lib/calc');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
const regexValidator = /[*/+-.]|[0-9]/; // Checks for valid operators and digits

const validateUserInput = async userInput => {
	const isValid = userInput.every(element => element.match(regexValidator));
	return isValid;
};

(async () => {
	init({ clear });
	const userAnswer = await inquirer.prompt([
		{
			type: 'input',
			name: 'userInputArray',
			message: 'Input in Reverse Polish notation.',
			filter: userInput => userInput.split(' '),
			validate: validateUserInput
		}
	]);
	const { userInputArray } = userAnswer;

	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);
})();
