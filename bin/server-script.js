#!/usr/bin/env node

const script = process.argv[2]
const args = process.argv.slice(3)

const isInteractive = process.stdout.isTTY
const start = require('../start')

switch (script) {
  case 'start': {
    start()
    break
  }
  default:
  console.log('Unknown script "' + script + '".');
  console.log('Perhaps you need to update react-scripts?');
  break;
}