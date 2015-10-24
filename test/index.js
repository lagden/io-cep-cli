'use strict';

import test from 'ava';
import fs from 'fs';
import path from 'path';
import {spawn} from 'child_process';

const bin = path.join(__dirname, '../cli.js');
const file = path.join(__dirname, 'out.txt');
const out = fs.readFileSync(file);

test('valid', t => {
	t.plan(1);
	spawn(bin, ['04653055'])
		.stdout
		.on('data', data => {
			t.same(data.length, out.length);
		});
});

test('invalid', t => {
	t.plan(1);
	spawn(bin, ['123'])
		.stdout
		.on('data', buf => {
			t.same(buf.toString('utf8'), '✖ Invalid format\n');
		});
});
