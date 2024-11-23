import path from 'path';
import { fileURLToPath } from 'url';
import { readMarkdownFileSync } from './file';

test('readMarkdownFileSync', () => {
  // readMarkdownFileSync('test.md');
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const markdown = readMarkdownFileSync(
    path.resolve(__dirname, '../fixtures/test.md')
  );

  expect(markdown).toStrictEqual('**bold**');
});
