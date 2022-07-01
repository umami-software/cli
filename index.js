#!/usr/bin/env node

import 'dotenv/config';
import yargs from 'yargs';

const cli = yargs
  .scriptName('umami')
  .usage('$0 <cmd> [args]')
  .alias('v', 'version')
  .alias('h', 'help');

cli.command('config', 'Configures umami', {}, argv => {
  console.log('yo', argv);
  init();
});

cli.help().argv;
