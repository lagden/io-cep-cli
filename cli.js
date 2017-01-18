#!/usr/bin/env node

'use strict'

const program = require('commander')
const Table = require('cli-table2')
const chalk = require('chalk')
const consulta = require('io-cep')
const pkg = require('./package.json')

const error = chalk.bold.red
const warn = chalk.bold.yellow

function fail(err) {
	process.stdout.write(error(`✖ ${err.message}`))
	process.exit(1)
}

function show(dados) {
	if (dados && dados.length > 0) {
		const tableHead = ['']
		dados.forEach(row => {
			tableHead.push(row.cep)
		})
		const table = new Table({head: tableHead})
		const cols = Object.keys(dados[0])
		for (let i = 0; i < cols.length; i++) {
			const col = cols[i]
			if (col === 'cep') {
				continue
			}
			const arr = []
			dados.forEach(row => {
				arr.push(row[col])
			})
			const obj = {}
			obj[warn(col)] = arr
			table.push(obj)
		}
		process.stdout.write(table.toString())
	} else {
		process.stdout.write(warn('⚠ Nenhum registro encontrado'))
	}
}

function success(res) {
	const dados = []
	for (const dado of res.dados) {
		dados.push(dado)
	}
	show(dados)
	process.exit(0)
}

program
	.version(pkg.version)
	.description('Busca por informações de uma localidade através do endereço ou CEP')
	.usage('<input>')
	.arguments('<input>')
	.action(req => {
		consulta(req)
			.then(success)
			.catch(fail)
	})
	.parse(process.argv)

if (program.args && program.args.length === 0) {
	program.help()
}
