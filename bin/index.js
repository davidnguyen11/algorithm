#!/usr/bin/env node
'use strict';
const commander = require('commander');
const packageJson = require('../package.json');
const generator = require('./generator');
const { name, version } = packageJson;

const program = new commander.Command(name).version(version);

program
  .command(`new [appName]`)
  .description('Set up boilerplate to solve problem')
  .action(function (appName) {
    generator(appName);
  });

program.parse(process.argv);
