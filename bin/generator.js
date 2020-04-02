#!/usr/bin/env node
'use strict';
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const createPackageJson = require('./create-pkg');;
const createJSFile = require('./create-js');
const isWord = require('./utils/is-word');

module.exports = function () {
  const appName = process.argv[3];
  const pathName = path.join(process.cwd(), appName);
  const appNameExists = fs.existsSync(pathName);

  if (!appNameExists) {
    fs.ensureDirSync(pathName);
    createPackageJson(appName);
    createJSFile(appName, getFunctionParams(process.argv));
  } else {
    console.log(chalk.red('Project name is already existed. 😕 😕 😕'));
  }
};

function getFunctionParams(arr) {
  if (process.argv.length <= 4) return [];

  const params = [];

  for (let i = 4; i < process.argv.length; i++) {
    if (isWord(process.argv[i])) {
      params.push(process.argv[i]);
    }
  }

  return params;
}


