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

  // Sets the maximum line length at 120 (instead of the default 80).
  // Modern day screens are large enough to make this comfortable
  'max-len': [
    'error',
    {
      code: 120,
      // Ignores URLs and Quoted strings because breaking them for readability can cause issues
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],

  // Disallowing unused vars will help us clean up redundant properties and definitions
  '@typescript-eslint/no-unused-vars': 'error',

  // Disallowing the 'any' type will help us increase TypeSafety from the get-go. Use 'unknown' instead if necessary
  // See also https://dev.to/arikaturika/typescript-why-to-use-unknown-instead-of-any-41i8
  '@typescript-eslint/no-explicit-any': 'error',
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
