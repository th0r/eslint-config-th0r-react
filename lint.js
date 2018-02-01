#! /usr/bin/env node

const {execSync} = require('child_process');

const SOURCES =
  [
    'webpack-bundle-analyzer/client/*.jsx',
    'webpack-bundle-analyzer/client/components'
  ]
    .map(path => `projects/${path}`)
    .join(' ');

const args = process.argv.slice(2);
const fix = args.includes('-f');

try {
  const cmd = `./node_modules/.bin/eslint -c ./index.json --ext js,jsx ${fix ? '--fix' : ''} -- ${SOURCES}`;
  console.log(`Running the following command:\n${cmd}`);
  execSync(cmd, {stdio: 'inherit'});
  console.log('OK');
} catch (err) {
  process.exit(err.status);
}
