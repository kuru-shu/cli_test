import { marked } from 'marked';
import path from 'path';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { readMarkdownFileSync, writeHtmlFileSync } from './lib/file';
import { getPackageName } from './lib/name';

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

  console.log(name);

  // nameオプションが入っていた場合は他のオプションを使わないので正常終了させる
  process.exit(0);
}

// 指定されたMarkdownファイルを読み込む
const markdownStr = readMarkdownFileSync(
  path.resolve(import.meta.dirname, argv.file)
);

// Markdownをhtmlに反感
const html = marked(markdownStr);

writeHtmlFileSync(path.resolve(import.meta.dirname, argv.out), html);
