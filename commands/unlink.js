const unlink = require('../lib/unlink');

module.exports = client => {

  client.cli
    .command('unlink <src>')
    .alias('ul')
    .action(src => {
      unlink(src);
    });
}
