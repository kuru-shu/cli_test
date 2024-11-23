import fs from 'fs';
import path from 'path';

const packageStr = fs.readFileSync(
  path.resolve(import.meta.dirname, '../package.json'),
  {
    encoding: 'utf-8',
  }
);
const packageData = JSON.parse(packageStr);

export function getPackageName() {
  return packageData.name;
}
