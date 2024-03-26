const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

sh.config.silent = true;

sh.exec('mkdir -p bff-data');

const pmt = sh.exec('cd node_modules/@postman/pmt/ && SCRIPT=index node get.js && cd ../../../').stdout.trim();

fs.writeFile(path.join('bff-data', 'pmt.js'), pmt, (err) => {
  if (err) {
    throw err;
  }
});

const utms = sh.exec('cd node_modules/@postman/pmt/ && SCRIPT=utms node get.js && cd ../../../').stdout.trim();

fs.writeFile(path.join('bff-data', 'utms.js'), utms, (err) => {
  if (err) {
    throw err;
  }
});

sh.config.silent = false;