const fs = require('fs-extra');

async function unlink (src) {
  const pkg = await fs.readJson(`${src}/package.json`);
  const dest = `./link_modules/${pkg.name}`;
  await fs.remove(dest);
}

module.exports = unlink;
