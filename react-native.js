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
    'airbnb/hooks',
    '@react-native-community',
    'prettier',
    './typescript', // Place last to ensure our TS overrides have priority
  ],

  // Add React Native specific rule deviations here.
  rules: {},
};
