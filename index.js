const path = require('path');
const { marked } = require('marked');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getPackageName } = require('./lib/name');
const { readMarkdownFileSync, writeHtmlFileSync } = require('./lib/file');
const { describe } = require('yargs');

// Node.jsのパスとスクリプトのパスは不要なのでhideBinで取り除く
const { argv } = yargs(hideBin(process.argv))
  // オプションの説明を追加
  // --helpで説明が表示されるようになる
  .option('name', { describe: 'CLI名を表示' })
  .option('file', { describe: 'Markdownファイルのパス' })
  .option('out', {
    describe: 'html file',
    default: 'article.html',
  });

if (argv.name) {
  const name = getPackageName();

  console.log(package.name);

  // nameオプションが入っていた場合は他のオプションを使わないので正常終了させる
  process.exit(0);
}

// 指定されたMarkdownファイルを読み込む
const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));

// Markdownをhtmlに反感
const html = marked(markdownStr);

writeHtmlFileSync(path.resolve(__dirname, argv.out), html);
