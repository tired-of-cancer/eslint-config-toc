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
    './react', // Keep next-to-last: ensures our React and TS overrides have priority
    'plugin:react/jsx-runtime', // Keep last: allows omitting React import in React 17+
  ],

  // Add React Native specific rule deviations here.
  rules: {},
};
