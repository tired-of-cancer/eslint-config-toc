// Add JavaScript and TypeScript rule deviations here.
const rules = {
  // Sync Prettier with ESLint to prevent formatter conflicts
  'prettier/prettier': [
    'error',
    {
      // eslint-disable-next-line global-require
      ...require('./.prettierrc'),
    },
  ],
};

module.exports = {
  parser: '@typescript-eslint/parser',

  root: true,

  plugins: ['prettier'],

  extends: ['airbnb', 'prettier'],

  settings: {
    'import/resolver': 'node',
  },

  rules,

  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        'android.ts',
        'ios.ts',
        'android.tsx',
        'ios.tsx',
      ],

      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },

      plugins: ['@typescript-eslint', 'prettier'],

      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],

      rules,
    },
  ],

  env: {
    node: true,
    browser: true,
    jest: true,
  },
};
