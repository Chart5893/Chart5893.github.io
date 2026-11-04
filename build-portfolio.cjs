const { execFileSync } = require('node:child_process');
const { cpSync } = require('node:fs');
const path = require('node:path');
const client = path.join(__dirname, 'company-offices-app', 'client');
execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], {
  cwd: client,
  stdio: 'inherit',
  shell: process.platform === 'win32'
});
cpSync(path.join(client, 'build'), __dirname, { recursive: true });
console.log('Portfolio output copied to the repository root. Review changes before committing.');
