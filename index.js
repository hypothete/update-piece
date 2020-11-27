const fs = require('fs');
const path = require('path');
const names = require('all-the-package-names');
const packageLocation = path.join(__dirname, 'package.json');
const package = require(packageLocation);

package.dependencies = package.dependencies || {};

names.forEach(name => {
  package.dependencies[name] = 'latest';
});

fs.writeFileSync(packageLocation, JSON.stringify(package, null, 2));