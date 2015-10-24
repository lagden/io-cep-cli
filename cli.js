#!/usr/bin/env node

'use strict';

const program = require('commander');
const Table = require('cli-table');
const chalk = require('chalk');
const pkg = require('./package.json');
const consulta = require('io-cep');

const error = chalk.bold.red;

function fail(err) {
	process.stdout.write(`${error('\u2716')} ${err}\n`);
	process.exit(1);
}

function success(res) {
	if (res.hasOwnProperty('success')) {
		res.success = null;

		// Reflect.deleteProperty(res, 'success');
		delete res.success;
	}
	const head = Object.keys(res);
	const values = head.map(k => res[k]);
	const table = new Table({head});
	table.push(values);
	process.stdout.write(`${table.toString()}\n`);
	process.exit();
}

program
	.version(pkg.version)
	.usage('<zipcode>')
	.description('Search address using zip code')
	.arguments('<zipcode>')
	.action(zipcode => {
		consulta(zipcode)
			.then(success)
			.catch(fail);
	})
	.parse(process.argv);

if (!program.args.length) {
	program.help();
}
