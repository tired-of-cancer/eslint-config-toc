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
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    './typescript', // Place last to ensure our TS overrides have priority
  ],

  // Add React project specific rule deviations here.
  rules: {},
};
