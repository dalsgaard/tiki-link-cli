const path = require('path');
const fs = require('fs-extra');

async function link (src) {
  const pkg = await fs.readJson(`${src}/package.json`);
  const dest = `./link_modules/${pkg.name}`;
  await fs.ensureSymlink(src, dest);
}

module.exports = link;
