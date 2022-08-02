module.exports = {
  root: true,

  plugins: [],

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
    '@react-native-community',
    './react', // Keep next-to-last: ensures our React and TS overrides have priority
  ],

  // Add React Native specific rule deviations here.
  rules: {
    // Sort RN styles, this will sort typed stylenames and style props in alphabetic order
    'react-native/sort-styles': [
      'error',
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],
  },
};
