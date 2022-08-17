module.exports = {
  root: true,

  plugins: ['react'],

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['node_modules', 'src'],
      },
    },
  },

  extends: [
    'airbnb/hooks',
    './typescript', // Keep next-to-last: ensures our TS overrides have priority
    'plugin:react/jsx-runtime', // Keep last: allows omitting React import in React 17+
  ],

  // Add React project specific rule deviations here.
  rules: {
    // Sort props for JSX component alphabetically (while keeping callbacks at the end) to improve readability
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
      },
    ],

    // Some unicorn rules are not compatible with React, so we disable them for those projects
    // See also https://github.com/sindresorhus/eslint-plugin-unicorn/issues/896
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
}
