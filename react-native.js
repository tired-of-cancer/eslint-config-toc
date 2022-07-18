module.exports = {
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
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    './typescript', // Place last to ensure our TS overrides have priority
  ],

  // Add React Native specific rule deviations here.
  rules: {},
};
