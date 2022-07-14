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

  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],

  // Add React project specific rule deviations here.
  rules: {},
};
