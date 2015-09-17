/* global describe, it */

'use strict';

import fs from 'fs';
import {spawn} from 'child_process';
import path from 'path';

const bin = path.join(__dirname, '../cli.js');
const file = path.join(__dirname, 'out.txt');
const out = fs.readFileSync(file);

describe('cep', () => {
	it('should be equal', done => {
		const s = spawn(bin, ['04653055']);
		s.stdout.on('data', data => {
			data.length.should.equal(out.length);
			done();
		});
	});
});
