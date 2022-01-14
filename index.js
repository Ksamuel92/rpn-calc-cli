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

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
const regexValidator = /[*/+-.]|[0-9]/;

const handleRpnCalculation = input => {};

(async () => {
	init({ clear });
	inquirer.prompt([
		{
			type: 'input',
			name: 'setToCalculate',
			message: 'Input in Reverse Polish notation.',
			filter: userInput => userInput.split(' '),
			validate: userInput =>
				userInput.every(element =>
					element.match(regexValidator)
						? console.log(userInput)
						: console.log('nah FAM')
				)
		}
	]);
	// .then(userAnswer =>
	// 	userAnswer.setToCalculate
	// 		// ? console.log(userAnswer.setToCalculate)
	// 		: console.log('No')
	// );

	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);
})();
