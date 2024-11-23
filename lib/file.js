import fs from 'fs';

export function readMarkdownFileSync(path) {
  const markdownStr = fs.readFileSync(path, 'utf8');

  return markdownStr;
}

// 指定したパスにhtmlを書き出す
export function writeHtmlFileSync(path, html) {
  fs.writeFileSync(path, html, { encoding: 'utf-8' });
}
