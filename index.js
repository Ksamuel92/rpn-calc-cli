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

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
