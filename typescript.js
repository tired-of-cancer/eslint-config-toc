module.exports = {
  parser: '@typescript-eslint/parser',

  root: true,

  plugins: ['@typescript-eslint', 'prettier'],

  settings: {
    'import/resolver': 'node',
  },

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

      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],

      // Add JavaScript and TypeScript rule deviations here.
      rules: {
        // Sync Prettier with ESLint to prevent formatter conflicts
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
          },
        ],

        // Enforce named exports to ensure consistent usage of component throughout the codebase.
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
      },
    },
  ],

  env: {
    node: true,
    browser: true,
    jest: true,
  },
};
