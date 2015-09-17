#!/usr/bin/env node


'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _packageJson = require('./package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

var _ioCep = require('io-cep');

var _ioCep2 = _interopRequireDefault(_ioCep);

var error = _chalk2['default'].bold.red;

function fail(err) {
	process.stdout.write(error('✖') + ' ' + err + '\n');
	process.exit(1);
}

function success(res) {
	if (res.hasOwnProperty('success')) {
		res.success = null;

		delete res.success;
	}
	var head = Object.keys(res);
	var values = head.map(function (k) {
		return res[k];
	});
	var table = new _cliTable2['default']({ head: head });
	table.push(values);
	process.stdout.write(table.toString() + '\n');
	process.exit();
}

_commander2['default'].version(_packageJson2['default'].version).usage('<zipcode>').description('Search address using zip code').arguments('<zipcode>').action(function (zipcode) {
	(0, _ioCep2['default'])(zipcode).then(success)['catch'](fail);
}).parse(process.argv);

if (!_commander2['default'].args.length) {
	_commander2['default'].help();
}