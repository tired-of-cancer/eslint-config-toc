module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    './react', // Keep next-to-last: ensures our TS overrides have priority
  ],
};
