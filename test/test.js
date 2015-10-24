/* global describe, it */

'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;
const path = require('path');

const bin = path.join(__dirname, '../cli.js');
const file = path.join(__dirname, 'out.txt');
const out = fs.readFileSync(file);

describe('cep', () => {
	it('valid', done => {
		const s = spawn(bin, ['04653055']);
		s.stdout.on('data', data => {
			data.length.should.equal(out.length);
			done();
		});
	});

	it('invalid', done => {
		const s = spawn(bin, ['123']);
		s.stdout.on('data', buf => {
			buf.toString('utf8').should.equal('✖ Invalid format\n');
			done();
		});
	});
});
