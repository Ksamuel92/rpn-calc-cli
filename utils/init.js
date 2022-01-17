const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = () => {
	unhandled();
	welcome({
		title: `rpn-calculator-cli`,
		tagLine: `by Kyle Samuel`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#0072CE',
		color: '#000000',
		bold: true
	});
};
