import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 12,
      },
    },
    rules: {
      quotes: [1, 'single'],
    },
  },
];
