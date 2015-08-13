/* global describe, it */

'use strict';

import fs from 'fs';
import {spawn} from 'child_process';
import path from 'path';

let bin = path.join(__dirname, '../cli.js');
let file = path.join(__dirname, 'out.txt');
let out = fs.readFileSync(file);

describe('cep', () => {
  it('should be equal', (done) => {
    let s = spawn(bin, ['04653055']);
    s.stdout.on('data', (data) => {
      data.length.should.equal(out.length);
      done();
    });
  });
});
