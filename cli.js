#!/usr/bin/env node

'use strict';

const program = require('commander');
const Table = require('cli-table');
const chalk = require('chalk');
const pkg = require('./package.json');
const consulta = require('io-cep');

const error = chalk.bold.red;
let input;

function fail(err) {
	process.stdout.write(`${error('\u2716')} ${err.message}\n`);
	process.exit(1);
}

function showSuccess(dados) {
	const head = Object.keys(dados);
	const values = head.map(k => dados[k]);
	const table = new Table({head});
	table.push(values);
	process.stdout.write(`${table.toString()}\n`);
}

function success(res) {
	if (res.hasOwnProperty('success')) {
		res.success = null;

		// Reflect.deleteProperty(res, 'success');
		delete res.success;
	}
	for (const dados of res.dados) {
		dados.req = res.req;
		showSuccess(dados);
	}
	process.exit();
}

program
	.version(pkg.version)
	.description('Busca por informações de uma localidade através do endereço ou CEP')
	.usage('<input>')
	.arguments('<input>')
	.action(req => {
		input = String(req);
	})
	.parse(process.argv);

if (!program.args.length) {
	program.help();
}

consulta(input)
	.then(success)
	.catch(fail);
