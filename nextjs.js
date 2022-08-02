module.exports = {
  root: true,

  // plugins: [], Already set in React.js
  // settings: {}, Already set in React.js

  extends: [
    'next/core-web-vitals',
    './react', // Keep last: ensures our TS overrides have priority
  ],

  // Add NextJS project specific rule deviations here.
  rules: {},
};
