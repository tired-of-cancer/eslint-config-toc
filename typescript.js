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

  // Omitting semicolons makes the codebase easier to read and to manipulate (shifting lines)
  semi: ['error', 'never'],

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

  // The unicorn rule to disallow array.forEach() conflicts directly with the airbnb rule to disallow loops
  // In this case, we choose to follow the airbnb guidelines. See also https://github.com/airbnb/javascript/issues/1271
  'unicorn/no-array-for-each': 'off',

  // This goes against the principle set by one of the most popular linting packages. See also https://github.com/sindresorhus/eslint-plugin-unicorn/issues/896
  'unicorn/filename-case': 'off',
}

// Add plugins that should be used in both vanilla JS and TS linting
const jsOnlyPlugins = ['simple-import-sort', 'import', 'unicorn']

// Add plugins that should only be used in TS linting
const tsSpecificPlugins = ['@typescript-eslint']

// Add extensions that should be used in both vanilla JS and TS linting
const jsOnlyExtensions = ['airbnb']

// Add extensions that should only be used in TS linting
const tsSpecificExtensions = [
  'airbnb-typescript',
  'plugin:unicorn/recommended',
  'plugin:@typescript-eslint/recommended',
]

module.exports = {
  parser: '@typescript-eslint/parser',

  root: true,

  plugins: [...jsOnlyPlugins, 'prettier'],

  extends: [...jsOnlyExtensions, 'prettier'],

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

      plugins: [...jsOnlyPlugins, ...tsSpecificPlugins, 'prettier'],

      extends: [...jsOnlyExtensions, ...tsSpecificExtensions, 'prettier'],

      rules,
    },
  ],

  env: {
    node: true,
    browser: true,
    jest: true,
  },
}
