#!/usr/bin/env node
'use strict';
const commander = require('commander');
const readline = require('readline');
const packageJson = require('../package.json');
const generator = require('./generator');
const { name, version } = packageJson;

const program = new commander.Command(name).version(version);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

program
  .command(`new [name] [arguments]`)
  .description('Set up boilerplate to solve problem')
  .action(function (appName) {
    rl.question('Enter function name in camelCase: ', (answer) => {
      let funcName;

      if (answer && answer.trim()) {
        funcName = answer.trim();
      }

      generator(funcName);

      rl.close();
    });

  });

program.parse(process.argv);
