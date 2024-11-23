const path = require('path');
const fs = require('fs');

const packageStr = fs.readFileSync(path.resolve(__dirname, '../package.json'), {
  encoding: 'utf-8',
});
const packageData = JSON.parse(packageStr);

exports.getPackageName = () => {
  return packageData.name;
};
