const program = require('commander');
const pkg = require('./package.json');

program.version(pkg.version);

const client = { };
client.cli = program;

require('./commands')(client);

module.exports = client;