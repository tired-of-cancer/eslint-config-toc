module.exports = {
  root: true,

  // plugins: [], Already set in React.js
  // settings: {}, Already set in React.js

  extends: [
    '@react-native-community',
    './react', // Keep last: ensures our React and TS overrides have priority
  ],

  // Add React Native specific rule deviations here.
  rules: {
    // Sort RN styles, this will sort typed stylenames and style props in alphabetic order
    'react-native/sort-styles': [
      'error',
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],

    // We don't need a valid "href" prop on Link components since they are not HTML links
    'jsx-a11y/anchor-is-valid': 'off',
  },
}
