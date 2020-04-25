const paths = require('./config/paths');
const path = require('path');

module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    settings: {
      "import/resolver": {
        node: {
            extensions: ['.js', '.jsx', '.scss', '.css'],
            moduleDirectory: ['node_modules', 'src/']
        },
      },
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
        "import/no-unresolved": [0, {commonjs: true, amd: true}]
    },
  };