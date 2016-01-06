'use strict';

import test from 'ava';
import fs from 'fs';
import path from 'path';
import {spawn} from 'child_process';

const bin = path.join(__dirname, '../cli.js');
const file = path.join(__dirname, 'out.txt');
const out = fs.readFileSync(file);

test.cb('valid', t => {
	spawn(bin, ['04653055'])
		.stdout
		.on('data', buffer => {
			t.same(buffer.length, out.length);
			t.end();
		});
});

test.cb('invalid', t => {
	spawn(bin, ['123'])
		.stdout
		.on('data', buffer => {
			t.same(buffer.toString('utf8'), '✖ Dados não encontrado ou erro de análise\n');
			t.end();
		});
});
