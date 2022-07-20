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

  // Enforce named exports to ensure consistent usage of component throughout the codebase.
  'import/prefer-default-export': 'off',
  'import/no-default-export': 'error',

  // All of these import rules are auto-fixable, keeping our files more consistent and readable
  // Sort all imports and exports in a default alphabetic order
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  // Enforce imports at the top of the file
  'import/first': 'error',
  // Enforce a newline after the import section
  'import/newline-after-import': 'error',
  // Guard against duplicate imports
  'import/no-duplicates': 'error',
};

module.exports = {
  parser: '@typescript-eslint/parser',

  root: true,

  plugins: ['simple-import-sort', 'import', 'prettier'],

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

      plugins: [
        '@typescript-eslint',
        'simple-import-sort',
        'import',
        'prettier',
      ],

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
