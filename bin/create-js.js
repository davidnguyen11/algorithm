#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const toCamelCase = require('./utils/to-camel-case');
const { getJsBody } = require('./utils/content');

module.exports = function (appName, funcName, params) {
  const appDir = path.join(process.cwd(), appName);
  const jsFileName = path.join(appDir, 'index.js');

  const functionName = funcName || toCamelCase(appName);
  const parameters = params.length ? params.join(', ') : '';

  fs.writeFile(
    jsFileName,
    getJsBody(functionName, parameters),
    'utf8',
    function (err) {
      if (err) throw err;
      console.log('Created index.js file successfully!!! 🎉 🎉 🎉');
    },
  );
};
