const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = () => {
	unhandled();
	welcome({
		title: `rpn-calc-cli`,
		tagLine: `by Kyle Samuel`,
		description:
			pkg.description + " Input 'ac' to clear history or 'q' to exit.",
		version: pkg.version,
		bgColor: '#0072CE',
		color: '#000000',
		bold: true
	});
};
