const link = require('../lib/link');

module.exports = client => {

  client.cli
    .command('link <src>')
    .alias('ln')
    .action(src => {
      link(src);
    });
}
