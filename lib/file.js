const fs = require('fs');

exports.readMarkdownFileSync = (path) => {
  const markdownStr = fs.readFileSync(path, { encoding: 'utf-8' });

  return markdownStr;
};

// 指定したパスにhtmlを書き出す
exports.writeHtmlFileSync = (path, html) => {
  fs.writeFileSync(path, html, { encoding: 'utf-8' });
};
