const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Usage: node find-deploy-dir.js <searchRoot>');
  process.exit(2);
}

const searchRoot = process.argv[2];

function findIndexDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isFile() && e.name.toLowerCase() === 'index.html') {
      return dir;
    }
  }
  for (const e of entries) {
    if (e.isDirectory()) {
      const full = path.join(dir, e.name);
      try {
        const found = findIndexDir(full);
        if (found) return found;
      } catch (err) {
        // ignore
      }
    }
  }
  return null;
}

const resolved = path.resolve(searchRoot);
if (!fs.existsSync(resolved)) {
  console.error(`Search root does not exist: ${resolved}`);
  process.exit(3);
}

const dir = findIndexDir(resolved);
if (!dir) {
  console.error('No index.html found under ' + resolved);
  process.exit(4);
}

console.log(dir);
process.exit(0);
