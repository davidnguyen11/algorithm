#!/usr/bin/env node
'use strict';
const commander = require('commander');
const readline = require('readline');
const packageJson = require('../package.json');
const generator = require('./generator');
const ask = require('./ask');
const { name, version } = packageJson;

const program = new commander.Command(name).version(version);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

program
  .command(`new [name] [arguments]`)
  .description('Set up boilerplate to solve problem')
  .action(async (appName) => {
    const functionName = await ask(rl, 'Enter function name in camelCase: ');
    const problemLink = await ask(rl, 'Enter problem link: ');

    generator(functionName, problemLink);

    rl.close();
  });

program.parse(process.argv);
