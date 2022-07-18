module.exports = {
  parser: '@typescript-eslint/parser',

  root: true,

  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
  },

  plugins: ['@typescript-eslint', 'prettier'],

  settings: {
    'import/resolver': 'node',
  },

  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  env: {
    node: true,
    browser: true,
    jest: true,
  },

  // Add JavaScript and TypeScript rule deviations here.
  rules: {
    // Sync Prettier with ESLint to prevent formatter conflicts
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
};
