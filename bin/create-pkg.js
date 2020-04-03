#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const { getPgkJSON } = require('./utils/content');

module.exports = function (appName) {
  const appDir = path.join(process.cwd(), appName);
  const pkgFileName = path.join(appDir, 'package.json');

  fs.writeFile(pkgFileName, JSON.stringify(getPgkJSON(appName), null, 2), 'utf8', function (
    err
  ) {
    if (err) throw err;
    console.log('Created package.json successfully!!! 🎉 🎉 🎉');
  });
};
